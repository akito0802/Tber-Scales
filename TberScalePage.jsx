import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function TberScalePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6 gap-8">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest drop-shadow-sm">
        <span className="text-[#12f7ff] animate-pulse">T</span>
        <span className="text-[#ff00e0]">b</span>er
      </h1>
      <Card className="w-full max-w-lg shadow-lg rounded-2xl">
        <CardContent className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select defaultValue="C">
            <SelectTrigger className="bg-gray-50">
              <SelectValue placeholder="Key" />
            </SelectTrigger>
            <SelectContent>
              {["C", "C# / Db", "D", "D# / Eb", "E", "F", "F# / Gb", "G", "G# / Ab", "A", "A# / Bb", "B"].map((k) => (
                <SelectItem key={k} value={k}>{k}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="major">
            <SelectTrigger className="bg-gray-50">
              <SelectValue placeholder="Scale Group" />
            </SelectTrigger>
            <SelectContent>
              {[
                { v: "major", l: "Major" },
                { v: "minor", l: "Minor" },
                { v: "mode", l: "Mode" },
              ].map((t) => (
                <SelectItem key={t.v} value={t.v}>{t.l}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="ionian">
            <SelectTrigger className="bg-gray-50">
              <SelectValue placeholder="Scale" />
            </SelectTrigger>
            <SelectContent>
              {["Ionian", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Aeolian", "Locrian"].map((m) => (
                <SelectItem key={m} value={m.toLowerCase()}>{m}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
      <div className="w-full max-w-5xl">
        <svg viewBox="0 0 780 180" className="w-full" preserveAspectRatio="none">
          <rect x="0" y="0" width="780" height="180" fill="#f5f5dc" rx="8" />
          {Array.from({ length: 6 }).map((_, i) => {
            const y = 20 + i * 30;
            return <line key={`string-${i}`} x1="0" y1={y} x2="780" y2={y} stroke="#555" strokeWidth="1" />;
          })}
          {Array.from({ length: 13 }).map((_, i) => {
            const x = 60 * i;
            return <line key={`fret-${i}`} x1={x} y1="0" x2={x} y2="180" stroke="#888" strokeWidth={i === 0 ? 6 : 2} />;
          })}
          {[3, 5, 7, 9].map((f) => {
            const x = 60 * f + 30;
            return <circle key={`dot-${f}`} cx={x} cy="90" r="6" fill="#222" opacity="0.5" />;
          })}
          <circle cx={60 * 12 + 20} cy="60" r="6" fill="#222" opacity="0.5" />
          <circle cx={60 * 12 + 20} cy="120" r="6" fill="#222" opacity="0.5" />
          <circle cx={60 * 0 + 30} cy="150" r="12" fill="#67e8f9" />
          <text x={60 * 0 + 30} y="154" textAnchor="middle" fontSize="10" fill="#000" fontWeight="700">C</text>
          {[
            { f: 2, s: 5, n: "D" },
            { f: 2, s: 4, n: "E" },
            { f: 3, s: 3, n: "F" },
            { f: 3, s: 2, n: "G" },
            { f: 2, s: 1, n: "A" },
            { f: 0, s: 0, n: "B" },
          ].map(({ f, s, n }, idx) => {
            const cx = 60 * f + 30;
            const cy = 20 + s * 30;
            return (
              <g key={idx}>
                <circle cx={cx} cy={cy} r="12" fill="#fb7185" />
                <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10" fill="#000">{n}</text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
