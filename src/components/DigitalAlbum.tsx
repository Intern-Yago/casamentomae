import React, { useState, useEffect, useRef } from 'react';
import { Camera, Image as ImageIcon, Upload, CheckCircle, Loader2, X, Plus } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Photo {
  id: string;
  url: string;
  uploader_name?: string;
  created_at: string;
}

interface RSVP {
  name: string;
}

const DigitalAlbum: React.FC = () => {
  const [view, setView] = useState<'upload' | 'gallery'>('upload');
  const [uploading, setUploading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [justUploaded, setJustUploaded] = useState(false);
  const [uploaderName, setUploaderName] = useState('');
  const [confirmedNames, setConfirmedNames] = useState<string[]>([]);
  const [nameSuggestions, setNameSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch confirmed names for suggestions
    const fetchRSVPs = async () => {
      const { data, error } = await supabase
        .from('rsvps')
        .select('name')
        .eq('attending', true);
      
      if (!error && data) {
        setConfirmedNames(data.map(r => r.name));
      }
    };

    fetchRSVPs();

    // Close suggestions on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Filter suggestions based on input
    if (uploaderName.trim().length > 1) {
      const filtered = confirmedNames.filter(name => 
        name.toLowerCase().includes(uploaderName.toLowerCase()) &&
        name.toLowerCase() !== uploaderName.toLowerCase()
      );
      setNameSuggestions(filtered.slice(0, 5));
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [uploaderName, confirmedNames]);

  useEffect(() => {
    // Garantir que AOS não oculte a div se não for inicializado
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'none';
    });

    if (view === 'gallery') {
      fetchPhotos();
      setJustUploaded(false);
    }
  }, [view]);

  const fetchPhotos = async () => {
    const { data, error } = await supabase
      .from('photos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching photos:', error);
    } else {
      setPhotos(data || []);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...filesArray]);
      
      const newPreviews = filesArray.map(file => URL.createObjectURL(file));
      setPreviews(prev => [...prev, ...newPreviews]);
      setJustUploaded(false);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    URL.revokeObjectURL(previews[index]);
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setUploading(true);
    setUploadProgress(0);

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `album/${fileName}`;

      // 1. Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('fotos')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Error uploading file:', uploadError);
        continue;
      }

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('fotos')
        .getPublicUrl(filePath);

      // 3. Save to Database
      const { error: dbError } = await supabase
        .from('photos')
        .insert([{ 
          url: publicUrl,
          uploader_name: uploaderName.trim() || null
        }]);

      if (dbError) {
        console.error('Error saving to DB:', dbError);
      }
      
      setUploadProgress(Math.round(((i + 1) / selectedFiles.length) * 100));
    }

    setUploading(false);
    setSelectedFiles([]);
    setPreviews([]);
    setJustUploaded(true);
    setUploaderName('');
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="album-digital" className="bg-cream" style={{ display: 'block', opacity: 1, visibility: 'visible' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Compartilhe seus momentos</p>
          <h2 className="section-title">Álbum Digital</h2>
        </div>

        <div className="premium-card" style={{ maxWidth: '800px', margin: '0 auto', minHeight: '400px', display: 'flex', opacity: 1, visibility: 'visible' }}>
          {view === 'upload' ? (
            <div className="upload-view" style={{ width: '100%', display: 'block' }}>
              {justUploaded ? (
                <div className="text-center mb-8" style={{ padding: '20px', width: '100%' }}>
                  <div className="card-icon" style={{ margin: '0 auto 20px', backgroundColor: 'var(--olive)', color: 'white' }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ color: 'var(--olive)', marginBottom: '10px' }}>Upload concluído com sucesso!</h3>
                  <p className="text-muted mb-8">Suas fotos foram enviadas para o álbum coletivo. Obrigado por compartilhar!</p>
                  
                  <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => setView('gallery')}
                      style={{ minWidth: '200px' }}
                    >
                      <ImageIcon size={18} />
                      Ver Álbum
                    </button>
                    <button 
                      className="btn btn-outline" 
                      onClick={() => setJustUploaded(false)}
                      style={{ minWidth: '200px' }}
                    >
                      <Plus size={18} />
                      Enviar Mais
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ width: '100%' }}>
                  <div className="text-center mb-8">
                    <p className="mb-4 text-muted">Ajude-nos a eternizar esse dia! Faça o upload das fotos e vídeos que você tirou durante a festa.</p>
                    
                    {/* Name Input with Autocomplete */}
                    <div className="form-group mb-8" style={{ maxWidth: '400px', margin: '0 auto 30px', position: 'relative', textAlign: 'left' }}>
                      <label htmlFor="uploader-name" style={{ color: 'var(--olive)', marginBottom: '8px' }}>Seu Nome (Opcional)</label>
                      <input 
                        id="uploader-name"
                        type="text" 
                        value={uploaderName}
                        onChange={(e) => setUploaderName(e.target.value)}
                        placeholder="Digite seu nome..."
                        autoComplete="off"
                        style={{
                          width: '100%',
                          padding: '12px 15px',
                          borderRadius: '10px',
                          border: '1px solid #ddd',
                          fontFamily: 'inherit'
                        }}
                      />
                      {showSuggestions && (
                        <div 
                          ref={suggestionsRef}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'white',
                            border: '1px solid #ddd',
                            borderRadius: '0 0 10px 10px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            zIndex: 10,
                            overflow: 'hidden'
                          }}
                        >
                          {nameSuggestions.map((suggestion, idx) => (
                            <div 
                              key={idx}
                              onClick={() => {
                                setUploaderName(suggestion);
                                setShowSuggestions(false);
                              }}
                              style={{
                                padding: '10px 15px',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s',
                                borderBottom: idx === nameSuggestions.length - 1 ? 'none' : '1px solid #f0f0f0'
                              }}
                              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                            >
                              {suggestion}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileChange} 
                      multiple 
                      accept="image/*,video/*" 
                      className="hidden" 
                      style={{ display: 'none' }}
                    />

                    <div 
                      onClick={triggerFileInput}
                      className="upload-dropzone"
                      style={{
                        border: '2px dashed var(--blush)',
                        borderRadius: '15px',
                        padding: '40px',
                        cursor: 'pointer',
                        transition: 'var(--transition)',
                        backgroundColor: 'rgba(220, 174, 150, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '15px'
                      }}
                    >
                      <div className="card-icon" style={{ margin: 0 }}>
                        <Camera size={32} />
                      </div>
                      <div className="upload-text">
                        <p style={{ fontWeight: 600, color: 'var(--olive)' }}>Clique para selecionar fotos ou vídeos</p>
                        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Você pode selecionar vários arquivos de uma vez</p>
                      </div>
                    </div>
                  </div>

                  {selectedFiles.length > 0 && (
                    <div className="selected-files mb-8">
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px' }}>
                        {previews.map((preview, index) => (
                          <div key={index} style={{ position: 'relative', aspectRatio: '1/1' }}>
                            <img 
                              src={preview} 
                              alt="Preview" 
                              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} 
                            />
                            <button 
                              onClick={() => removeFile(index)}
                              style={{
                                position: 'absolute',
                                top: '-5px',
                                right: '-5px',
                                background: '#ff4d4d',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '24px',
                                height: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                              }}
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                        <button 
                          onClick={triggerFileInput}
                          style={{
                            aspectRatio: '1/1',
                            border: '1px dashed var(--blush)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--blush)',
                            background: 'transparent',
                            cursor: 'pointer'
                          }}
                        >
                          <Plus size={32} />
                        </button>
                      </div>

                      <div className="mt-8 text-center" style={{ marginTop: '30px' }}>
                        <button 
                          className="btn btn-primary" 
                          onClick={handleUpload} 
                          disabled={uploading}
                          style={{ width: '100%', maxWidth: '300px' }}
                        >
                          {uploading ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              Enviando ({uploadProgress}%)
                            </>
                          ) : (
                            <>
                              <Upload size={18} />
                              Enviar {selectedFiles.length} {selectedFiles.length === 1 ? 'arquivo' : 'arquivos'}
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 text-center" style={{ marginTop: '20px' }}>
                    <button 
                      className="btn btn-outline" 
                      onClick={() => setView('gallery')}
                      style={{ width: '100%', maxWidth: '300px' }}
                    >
                      <ImageIcon size={18} />
                      Ver Álbum
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="gallery-view w-full">
              <div className="flex justify-between items-center mb-6" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h3 style={{ margin: 0 }}>Fotos dos Convidados</h3>
                <button 
                  className="btn btn-primary btn-sm" 
                  onClick={() => setView('upload')}
                  style={{ padding: '8px 20px', fontSize: '0.75rem' }}
                >
                  <Plus size={16} /> Enviar Mais
                </button>
              </div>

              {photos.length === 0 ? (
                <div className="text-center py-12" style={{ padding: '60px 0' }}>
                  <ImageIcon size={48} style={{ opacity: 0.2, marginBottom: '15px' }} />
                  <p>O álbum ainda está vazio. Seja o primeiro a compartilhar!</p>
                </div>
              ) : (
                <div 
                  className="photos-grid" 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
                    gap: '15px' 
                  }}
                >
                  {photos.map(photo => (
                    <div 
                      key={photo.id} 
                      style={{ 
                        aspectRatio: '1/1', 
                        overflow: 'hidden', 
                        borderRadius: '12px',
                        boxShadow: 'var(--shadow-sm)',
                        cursor: 'pointer',
                        position: 'relative'
                      }}
                      onClick={() => window.open(photo.url, '_blank')}
                    >
                      <img 
                        src={photo.url} 
                        alt={photo.uploader_name ? `Foto enviada por ${photo.uploader_name}` : "Foto do casamento"} 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      {photo.uploader_name && (
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '8px',
                          background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                          color: 'white',
                          fontSize: '0.7rem',
                          textAlign: 'center'
                        }}>
                          Por {photo.uploader_name}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .hidden { display: none; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .upload-dropzone:hover {
          background-color: rgba(220, 174, 150, 0.1) !important;
          border-color: var(--olive) !important;
        }
      `}</style>
    </section>
  );
};

export default DigitalAlbum;
