import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Terminal, Shield, Cpu, Zap, Lock, Activity, AlertTriangle, CheckCircle, 
  XCircle, Database, Coins, ArrowRightLeft, Globe, Key, FileCode, 
  BarChart3, RefreshCcw, Layers, Search, User, Trash2, Clock, Binary, Server,
  TrendingUp, Users, Link as LinkIcon, Unlock, Smartphone, Monitor
} from 'lucide-react';

/**
 * BLOCK EDUCATION: AN INTERACTIVE LEDGER JOURNEY
 * Optimized for Mobile and Desktop responsiveness.
 */

// --- UTILITIES ---
const generateHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).toUpperCase().padStart(8, '0');
};

// --- SHARED COMPONENTS ---

const PixelFrame = ({ children, title, variant = 'blue', className = '' }) => {
  const themes = {
    blue: 'border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)] text-cyan-400',
    red: 'border-pink-600 shadow-[0_0_15px_rgba(219,39,119,0.3)] text-pink-500',
    gold: 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)] text-yellow-500',
    green: 'border-lime-500 shadow-[0_0_15px_rgba(132,204,22,0.3)] text-lime-400'
  };
  return (
    <div className={`border-2 p-3 sm:p-5 bg-black/95 font-mono ${themes[variant]} ${className}`}>
      {title && <div className="text-[9px] sm:text-[10px] uppercase mb-3 opacity-60 flex justify-between border-b border-current pb-1 italic font-black">
        <span className="truncate mr-2">{title}</span>
        <Activity className="w-3 h-3 animate-pulse shrink-0" />
      </div>}
      {children}
    </div>
  );
};

const ActionButton = ({ onClick, children, variant = 'blue', disabled = false, className = '' }) => {
  const styles = {
    blue: 'border-cyan-500 text-cyan-500 hover:bg-cyan-500',
    red: 'border-pink-500 text-pink-500 hover:bg-pink-500',
    gold: 'border-yellow-500 text-yellow-500 hover:bg-yellow-500',
    green: 'border-lime-500 text-lime-500 hover:bg-lime-500'
  };
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`border-2 px-3 py-3 sm:px-4 sm:py-3 uppercase text-[9px] sm:text-[10px] font-black tracking-widest transition-all active:scale-95 disabled:opacity-10 hover:text-black ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// --- MAIN APP ---

export default function App() {
  const [operatorId, setOperatorId] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [xp, setXp] = useState(0);
  
  // State Store
  const [nodeHealth, setNodeHealth] = useState([100, 100, 100, 100]);
  const [hashInput, setHashInput] = useState('STUDENT_DATA_01');
  const [avalancheInput, setAvalancheInput] = useState('BLOCK');
  const [heat, setHeat] = useState(30);
  const [miningSpeed, setMiningSpeed] = useState(0);
  const [stake, setStake] = useState(0);
  const [gasBid, setGasBid] = useState(10);
  const [swapAmount, setSwapAmount] = useState(1);
  const [daoVotes, setDaoVotes] = useState({ aye: 45, nay: 52 });
  const [keyGenerated, setKeyGenerated] = useState(false);
  const [chainLinks, setChainLinks] = useState(1);

  const advance = (points = 100) => {
    setXp(prev => prev + points);
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const renderQuest = () => {
    switch(currentStep) {
      case 1: return (
        <div className="text-center space-y-8 sm:space-y-12 py-6 sm:py-10">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-blue-700 tracking-tighter">BLOCK EDUCATION</h1>
            <p className="text-pink-500 text-[9px] sm:text-[10px] animate-pulse tracking-[0.4em] sm:tracking-[0.6em]">DECENTRALIZED LEARNING INTERFACE</p>
          </div>
          <div className="max-w-xs mx-auto space-y-4 px-4">
            <input 
              className="w-full bg-black border-2 border-cyan-900 p-4 text-center text-cyan-400 focus:border-cyan-400 outline-none uppercase font-mono text-sm"
              placeholder="ENTER STUDENT ID"
              value={operatorId}
              onChange={(e) => setOperatorId(e.target.value.toUpperCase())}
            />
            <ActionButton className="w-full py-4 sm:py-5" disabled={!operatorId} onClick={() => advance(50)}>
              [ INITIALIZE ]
            </ActionButton>
          </div>
        </div>
      );

      case 2: return (
        <PixelFrame title="QUEST_01_DECENTRALIZATION" variant="red">
          <p className="text-[11px] sm:text-xs mb-6">A single server is a target. Tap the RED alert to see what happens when a central bank server fails.</p>
          <div className="h-32 sm:h-40 flex flex-col items-center justify-center bg-pink-950/10 border border-pink-900 relative">
            {nodeHealth[0] > 0 ? (
              <div className="animate-shake">
                <Database className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500" />
                <p className="text-[9px] sm:text-[10px] text-center mt-2">BANK_SERVER_01</p>
              </div>
            ) : (
              <div className="text-center text-pink-700 animate-pulse">
                <XCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
                <p className="text-[9px] sm:text-[10px] mt-2 font-bold">SYSTEM_FAILURE: NO_ACCESS</p>
              </div>
            )}
            {nodeHealth[0] > 0 && (
              <div 
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer animate-ping"
                onClick={() => setNodeHealth([0,0,0,0])}
              ><Zap className="w-4 h-4 text-white" /></div>
            )}
          </div>
          {nodeHealth[0] === 0 && <ActionButton variant="red" className="w-full mt-4" onClick={() => advance(100)}>NEXT: THE SOLUTION</ActionButton>}
        </PixelFrame>
      );

      case 3: return (
        <PixelFrame title="QUEST_02_DISTRIBUTION" variant="green">
          <p className="text-[11px] sm:text-xs mb-6">Blockchains are distributed. Tap all nodes to synchronize the ledger across the network.</p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
            {nodeHealth.map((h, i) => (
              <div key={i} onClick={() => {
                const n = [...nodeHealth]; n[i] = 100; setNodeHealth(n);
              }} className={`p-3 sm:p-4 border-2 flex flex-col items-center cursor-pointer transition-colors ${h === 100 ? 'border-lime-500 bg-lime-900/20' : 'border-gray-800 opacity-40 animate-pulse'}`}>
                <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-[8px] mt-2">NODE_ID_{i+1}</span>
              </div>
            ))}
          </div>
          {nodeHealth.every(h => h === 100) && <ActionButton variant="green" className="w-full" onClick={() => advance(150)}>VERIFY CONSENSUS</ActionButton>}
        </PixelFrame>
      );

      case 4: return (
        <PixelFrame title="QUEST_03_HASHING" variant="blue">
          <p className="text-[11px] sm:text-xs mb-4">A hash is a digital fingerprint. Any change to the input results in a completely different hash.</p>
          <input className="w-full bg-black border border-cyan-800 p-3 text-xs text-cyan-400 mb-4 outline-none focus:border-cyan-400" value={hashInput} onChange={(e) => setHashInput(e.target.value)} />
          <div className="bg-cyan-950/40 p-3 border border-cyan-600 break-all text-[9px] sm:text-[10px] font-bold">
            OUTPUT: {generateHash(hashInput)}
          </div>
          <ActionButton className="w-full mt-4" onClick={() => advance(100)}>SAVE FINGERPRINT</ActionButton>
        </PixelFrame>
      );

      case 5: return (
        <PixelFrame title="QUEST_04_MINING" variant="gold">
          <p className="text-[11px] sm:text-xs mb-4">Proof of Work: Mining secures the network. Balance speed vs heat to validate the block.</p>
          <div className="space-y-6">
            <div className="h-4 bg-gray-900 border border-gray-800 rounded-full overflow-hidden">
               <div className={`h-full transition-all duration-300 ${heat > 80 ? 'bg-red-600' : 'bg-yellow-500'}`} style={{width: `${heat}%`}} />
            </div>
            <div className="flex justify-between text-[9px] sm:text-[10px]">
              <span className={heat > 80 ? 'text-red-500 animate-pulse' : ''}>CORE_TEMP: {heat}%</span>
              <span>RATE: {miningSpeed} TH/s</span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <ActionButton variant="gold" onClick={() => { setHeat(h => Math.min(100, h+12)); setMiningSpeed(s => s+5); }}>MINE</ActionButton>
              <ActionButton onClick={() => { setHeat(h => Math.max(10, h-20)); setMiningSpeed(s => Math.max(0, s-2)); }}>COOL</ActionButton>
            </div>
            {miningSpeed > 25 && heat < 85 && <ActionButton variant="green" className="w-full" onClick={() => advance(200)}>SUBMIT PROOF</ActionButton>}
          </div>
        </PixelFrame>
      );

      case 6: return (
        <div className="text-center space-y-8 sm:space-y-10 py-6 sm:py-10 animate-in zoom-in duration-1000 px-4">
           <div className="relative inline-block w-full max-w-xs">
             <div className="absolute -inset-4 sm:-inset-6 bg-cyan-500/20 blur-2xl animate-pulse rounded-full" />
             <div className="relative border-4 border-cyan-400 p-6 sm:p-10 bg-black shadow-[0_0_50px_rgba(6,182,212,0.4)]">
                <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 mx-auto mb-4" />
                <h2 className="text-xl sm:text-2xl font-black text-white truncate">{operatorId}</h2>
                <div className="h-px bg-cyan-900 my-4" />
                <p className="text-[10px] sm:text-xs font-bold text-cyan-500">CERTIFICATE_STATUS: GRANTED</p>
                <p className="text-[8px] sm:text-[10px] text-gray-500 mt-2">XP: {xp} | GEN_SIG: {generateHash(operatorId)}</p>
             </div>
           </div>
           <ActionButton variant="blue" className="w-full py-4 sm:py-6 text-lg sm:text-xl" onClick={() => window.location.reload()}>
             [ RESTART JOURNEY ]
           </ActionButton>
        </div>
      );

      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col items-center">
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" />
      <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle,transparent_80%,#000000_100%)]" />

      <header className="w-full max-w-lg p-3 sm:p-4 border-b border-gray-900 flex justify-between items-center bg-black/90 backdrop-blur sticky top-0 z-30">
        <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
          <Activity className="w-4 h-4 text-cyan-400 animate-pulse shrink-0" />
          <div className="space-y-0.5 min-w-0">
            <p className="text-[9px] sm:text-[10px] font-black text-cyan-400 leading-none">BLOCK_ED_v1.0</p>
            <p className="text-[7px] sm:text-[8px] text-gray-600 leading-none tracking-tighter truncate">OPERATOR: {operatorId || 'PENDING'}</p>
          </div>
        </div>
        <div className="text-right flex items-center gap-2 sm:gap-4 shrink-0">
           <div className="h-6 w-px bg-gray-800" />
           <p className="text-[11px] sm:text-xs font-black text-pink-600 tracking-widest">{xp} <span className="text-[7px] sm:text-[8px] text-gray-600 font-normal uppercase">XP</span></p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-lg p-4 sm:p-6 flex flex-col justify-center relative">
        {renderQuest()}
      </main>

      <footer className="w-full max-w-lg p-4 sm:p-6 bg-black/95 border-t border-gray-900 space-y-4">
        <div className="h-2 bg-gray-900 w-full overflow-hidden border border-gray-800">
           <div 
             className="h-full bg-cyan-500 transition-all duration-1000 shadow-[0_0_10px_rgba(6,182,212,0.8)]" 
             style={{ width: `${Math.min(100, (currentStep / 6) * 100)}%` }} 
           />
        </div>
        <div className="flex justify-between text-[6px] text-gray-700 font-bold uppercase tracking-widest">
          <span>{currentStep} / 6 NODES SYNCED</span>
          <div className="flex gap-2">
            <Smartphone className="w-2 h-2" />
            <Monitor className="w-2 h-2" />
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translate(0,0); }
          25% { transform: translate(-2px, 1px); }
          75% { transform: translate(2px, -1px); }
        }
        .animate-shake { animation: shake 0.15s infinite; }
        input[type="range"] { -webkit-appearance: none; background: transparent; }
        input[type="range"]::-webkit-slider-runnable-track { width: 100%; height: 6px; background: #111; border: 1px solid #333; border-radius: 99px; }
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; height: 24px; width: 12px; background: #06b6d4; margin-top: -10px; cursor: pointer; border-radius: 2px; }
      `}</style>
    </div>
  );
}
