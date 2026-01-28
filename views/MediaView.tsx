
import React from 'react';
import { MediaItem } from '../types';

interface MediaProps {
  media: MediaItem[];
  setMedia: React.Dispatch<React.SetStateAction<MediaItem[]>>;
}

const MediaView: React.FC<MediaProps> = ({ media, setMedia }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Proof Submissions & Assets</h3>
        <label className="bg-primary text-background-dark px-4 py-2 rounded-lg font-bold cursor-pointer hover:bg-primary/90 transition-colors">
          Upload Asset
          <input type="file" className="hidden" />
        </label>
      </div>

      {media.length === 0 ? (
        <div className="bg-white dark:bg-sidebar-dark border-2 border-dashed border-slate-200 dark:border-border-dark rounded-xl p-20 text-center">
          <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">cloud_upload</span>
          <p className="text-slate-500 dark:text-[#92c9b7]">No media files uploaded yet.</p>
          <p className="text-sm text-slate-400">Worker proofs will appear here after task completion.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {media.map(item => (
            <div key={item.id} className="relative aspect-square bg-slate-200 dark:bg-border-dark rounded-xl overflow-hidden group">
              <img src={item.url} alt={item.fileName} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button className="p-2 bg-white text-background-dark rounded-full"><span className="material-symbols-outlined">visibility</span></button>
                <button className="p-2 bg-rose-500 text-white rounded-full"><span className="material-symbols-outlined">delete</span></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaView;
