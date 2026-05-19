import { Image as ImageIcon } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-[#E5E7EB] w-full max-w-5xl rounded flex flex-col md:flex-row p-8 gap-12 animate-in fade-in zoom-in duration-300">
        
        {/* Left Side - Image Grid & Button */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-[#9CA3AF] aspect-square rounded flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-white opacity-50" />
              </div>
            ))}
          </div>
          
          <button 
            onClick={onClose}
            className="bg-accent-pink text-black font-bold py-2 px-8 self-start hover:bg-pink-200 transition-colors"
          >
            Back
          </button>
        </div>

        {/* Right Side - Text Details */}
        <div className="md:w-1/2 text-black flex flex-col gap-6">
          <h2 className="text-3xl font-bold mb-4">Lorem Project</h2>
          
          <div>
            <h4 className="font-bold mb-1">What i've done:</h4>
            <p className="text-[#4B5563] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-1">Duration:</h4>
            <p className="text-[#4B5563] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-1">Tech Stack:</h4>
            <p className="text-[#4B5563] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-1">Enterprise:</h4>
            <p className="text-[#4B5563] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
