"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Video, Mic, MicOff, VideoOff, MessageSquare, Users, Settings } from 'lucide-react';

export function VideoMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl ${className}`}>
      {/* Header bar */}
      <div className="bg-gray-800/80 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-400 text-sm font-medium">Sua Marca - Videochamada</span>
        <div className="flex items-center gap-2 text-gray-400">
          <Settings className="w-4 h-4" />
        </div>
      </div>

      {/* Main video area */}
      <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 p-4">
        {/* Main participant */}
        <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center overflow-hidden">
          <motion.div
            className="w-24 h-24 rounded-full bg-primary/30 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-4xl font-bold text-white/80">JD</span>
          </motion.div>
          <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
            Joao da Silva
          </div>
          {/* Simulated audio indicator */}
          <motion.div
            className="absolute bottom-4 right-4 flex items-center gap-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1 h-2 bg-green-400 rounded-full"></div>
            <div className="w-1 h-4 bg-green-400 rounded-full"></div>
            <div className="w-1 h-3 bg-green-400 rounded-full"></div>
            <div className="w-1 h-5 bg-green-400 rounded-full"></div>
          </motion.div>
        </div>

        {/* Small self-view */}
        <div className="absolute bottom-6 right-6 w-32 h-24 rounded-lg bg-gray-700 border-2 border-gray-600 flex items-center justify-center overflow-hidden shadow-lg">
          <div className="w-10 h-10 rounded-full bg-blue-500/50 flex items-center justify-center">
            <span className="text-sm font-bold text-white/80">Eu</span>
          </div>
        </div>

        {/* Whitelabel badge */}
        <div className="absolute top-6 left-6 bg-primary/90 px-3 py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1">
          <Video className="w-3 h-3" />
          Whitelabel
        </div>
      </div>

      {/* Control bar */}
      <div className="bg-gray-800/80 px-6 py-3 flex items-center justify-center gap-4 border-t border-gray-700">
        <button className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
          <Mic className="w-5 h-5 text-white" />
        </button>
        <button className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
          <Video className="w-5 h-5 text-white" />
        </button>
        <button className="p-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors">
          <VideoOff className="w-5 h-5 text-white" />
        </button>
        <button className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
          <MessageSquare className="w-5 h-5 text-white" />
        </button>
        <button className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
          <Users className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
