import { useState } from "react";

/* ═══════════════════════════════════════════
   THE SPEED KITCHEN — Complete Digital Book
   By Jimmy Mun · © 2026 All Rights Reserved
═══════════════════════════════════════════ */

const I = {};

I.SourdoughToast = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="175" rx="110" ry="22" fill="#2a2218" stroke="#c97c2a" strokeWidth="1.5"/>
    <ellipse cx="140" cy="170" rx="108" ry="18" fill="#1e1a14" stroke="#8a6820" strokeWidth="0.8"/>
    <path d="M72 145 Q68 80 80 55 Q85 42 95 38 L175 38 Q188 42 192 55 Q202 80 198 145Z" fill="#c8820a" stroke="#8a5008" strokeWidth="2"/>
    <path d="M80 55 Q85 42 95 38 L175 38 Q188 42 192 55" fill="none" stroke="#6a3808" strokeWidth="3" strokeLinecap="round"/>
    <path d="M58 150 Q54 85 66 58 Q71 44 82 40 L162 40 Q175 44 180 58 Q190 85 186 150Z" fill="#e09620" stroke="#9a6010" strokeWidth="2"/>
    <path d="M66 58 Q71 44 82 40 L162 40 Q175 44 180 58" fill="none" stroke="#7a4808" strokeWidth="3.5" strokeLinecap="round"/>
    <ellipse cx="95" cy="73" rx="9" ry="6" fill="#9a6010" opacity="0.55"/>
    <ellipse cx="148" cy="78" rx="7" ry="4.5" fill="#9a6010" opacity="0.5"/>
    <path d="M95 62 Q120 56 145 60 Q148 68 122 74 Q97 70 95 62Z" fill="#f5d060" stroke="#c8a020" strokeWidth="1"/>
    <path d="M148 148 Q162 138 175 142 Q180 152 168 158 Q154 162 148 156Z" fill="#c03028" stroke="#8a1818" strokeWidth="1.2"/>
    <path d="M100 38 Q97 28 101 18 Q105 8 102 0" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    <path d="M130 36 Q127 25 131 14" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
    <path d="M155 38 Q153 28 157 18" stroke="#f5e8c8" strokeWidth="1.2" strokeLinecap="round" opacity="0.2"/>
  </svg>
);

I.ScrambledEgg = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="180" rx="105" ry="18" fill="#1e1c16" stroke="#3a3828" strokeWidth="1.5"/>
    <path d="M40 140 Q38 158 42 170 Q60 190 140 192 Q220 190 238 170 Q242 158 240 140Z" fill="#1a1812"/>
    <path d="M45 138 Q44 155 48 166 Q65 185 140 187 Q215 185 232 166 Q236 155 235 138Z" fill="#f5f0e8"/>
    <ellipse cx="140" cy="138" rx="95" ry="16" fill="#f8f4ec"/>
    <path d="M75 130 Q88 118 105 122 Q115 130 108 140 Q95 145 82 140 Q72 135 75 130Z" fill="#f5c820"/>
    <path d="M88 128 Q98 120 110 124 Q118 130 112 138 Q102 142 90 138Z" fill="#f8d030"/>
    <path d="M112 120 Q128 110 145 116 Q152 125 145 135 Q130 140 118 136Z" fill="#f5c820"/>
    <path d="M138 115 Q155 106 170 112 Q178 120 172 130 Q158 136 145 132Z" fill="#f8d030"/>
    <path d="M165 118 Q178 110 192 116 Q196 125 190 133 Q178 138 166 134Z" fill="#f5c820"/>
    <path d="M215 118 Q212 105 215 96 Q222 90 230 93 Q236 100 233 112 Q228 120 220 120Z" fill="#c03028" stroke="#8a1818" strokeWidth="1"/>
    <path d="M53 128 Q46 118 50 110 Q56 103 64 108 Q70 115 65 125Z" fill="#d4a040" stroke="#a07020" strokeWidth="1"/>
    <path d="M138 128 Q136 115 140 104 Q144 93 141 83" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.EnglishBreakfast = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="183" rx="115" ry="20" fill="#1a1a18"/>
    <ellipse cx="140" cy="175" rx="108" ry="14" fill="#1e1c18"/>
    <path d="M65 118 Q55 145 58 168 Q75 185 140 187 Q205 185 222 168 Q225 145 215 118Z" fill="#1e1c18"/>
    <ellipse cx="140" cy="118" rx="75" ry="14" fill="#242220"/>
    <ellipse cx="86" cy="97" rx="10" ry="9" fill="#f8d030"/>
    <ellipse cx="86" cy="97" rx="7" ry="6" fill="#fde040"/>
    <path d="M115 106 Q108 90 114 78 Q120 68 130 70 Q140 72 138 82 Q136 94 128 104Z" fill="#c85018" stroke="#8a2808" strokeWidth="1.2"/>
    <path d="M148 98 Q144 78 150 64 Q156 52 168 54 Q180 56 178 70 Q176 84 168 96Z" fill="#c05018" stroke="#8a1808" strokeWidth="1.2"/>
    <path d="M186 104 Q180 90 184 78 Q190 68 200 70 Q208 73 205 85 Q202 96 194 104Z" fill="#8a6030" stroke="#5a3818" strokeWidth="1.2"/>
    <path d="M75 140 Q80 128 92 126 Q104 124 108 134 Q110 144 100 150 Q85 152 78 144Z" fill="#c03020"/>
    <path d="M118 148 Q115 136 120 126 Q126 116 136 116 Q148 116 150 128 Q152 140 145 150Z" fill="#2a2010" stroke="#4a3820" strokeWidth="1"/>
    <path d="M168 148 Q164 130 170 118 Q178 108 190 110 Q200 112 198 126 Q196 140 186 150Z" fill="#c8c080" stroke="#8a8040" strokeWidth="1"/>
    <path d="M140 35 Q136 20 140 8" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.FrenchToast = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="180" rx="110" ry="18" fill="#1a1810"/>
    <path d="M55 145 Q50 118 58 90 Q65 68 82 60 L192 60 Q208 68 214 90 Q220 118 215 145Z" fill="#d4900a" stroke="#9a6008" strokeWidth="2"/>
    <path d="M58 90 Q65 68 82 60 L192 60 Q208 68 214 90" fill="none" stroke="#7a4808" strokeWidth="3.5" strokeLinecap="round"/>
    <ellipse cx="100" cy="82" rx="12" ry="7" fill="#9a6010" opacity="0.5"/>
    <ellipse cx="155" cy="80" rx="10" ry="6" fill="#9a6010" opacity="0.45"/>
    <path d="M75 68 Q100 60 140 58 Q180 60 210 68 L215 85 Q180 72 140 70 Q100 72 65 84Z" fill="#f0a820" opacity="0.6"/>
    <path d="M118 140 Q122 130 128 120 Q136 108 148 102 Q162 100 168 110 Q172 122 165 136 Q155 148 140 150 Q124 150 118 140Z" fill="#f5b830" stroke="#c88010" strokeWidth="1.2"/>
    <path d="M125 132 Q136 126 148 130 Q150 138 140 143 Q130 143 125 132Z" fill="#f59040" opacity="0.7"/>
    <path d="M60 155 Q75 148 88 152 Q90 160 78 164 Q64 163 60 155Z" fill="#e09820"/>
    <path d="M198 158 Q210 150 220 154" stroke="#e09820" strokeWidth="3" strokeLinecap="round"/>
    <path d="M140 58 Q136 42 140 28 Q144 15 141 5" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.Naan = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="182" rx="112" ry="18" fill="#1a1a18"/>
    <ellipse cx="140" cy="178" rx="108" ry="14" fill="#141412"/>
    <path d="M58 145 Q45 120 48 95 Q55 65 80 52 Q108 42 145 46 Q180 50 200 68 Q218 88 215 115 Q210 142 192 155 Q165 168 128 165 Q88 160 58 145Z" fill="#e8b840" stroke="#c89020" strokeWidth="2"/>
    <path d="M62 140 Q50 118 53 95 Q59 68 82 56 Q108 47 143 51 Q176 55 195 72 Q212 90 209 115 Q204 140 187 152 Q162 164 128 161 Q90 156 62 140Z" fill="#f0c850"/>
    <path d="M70 130 Q62 112 65 92 Q70 72 88 62 Q110 53 143 57 Q174 61 190 78 Q204 96 200 118 Q196 138 180 148 Q158 158 128 155 Q93 150 70 130Z" fill="#e8b838"/>
    <ellipse cx="105" cy="78" rx="14" ry="10" fill="#1a0c04" opacity="0.7" transform="rotate(-20 105 78)"/>
    <ellipse cx="150" cy="65" rx="10" ry="7" fill="#1a0c04" opacity="0.6" transform="rotate(10 150 65)"/>
    <ellipse cx="185" cy="100" rx="12" ry="8" fill="#1a0c04" opacity="0.65" transform="rotate(-5 185 100)"/>
    <ellipse cx="88" cy="118" rx="9" ry="6" fill="#2a1408" opacity="0.55" transform="rotate(15 88 118)"/>
    <ellipse cx="165" cy="130" rx="11" ry="7" fill="#1a0c04" opacity="0.6" transform="rotate(-10 165 130)"/>
    <path d="M145 46 Q142 30 146 18" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.ChorizoPizza = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="185" rx="110" ry="16" fill="#1a1a18"/>
    <circle cx="140" cy="132" r="92" fill="#8a4010" stroke="#5a2808" strokeWidth="2"/>
    <circle cx="140" cy="132" r="78" fill="#d45818"/>
    <circle cx="130" cy="118" r="14" fill="#f0f0e8" stroke="#d0d0c0" strokeWidth="1"/>
    <circle cx="155" cy="108" r="11" fill="#f8f8f0" stroke="#d8d8c8" strokeWidth="1"/>
    <circle cx="115" cy="140" r="10" fill="#f0f0e8" stroke="#d0d0c0" strokeWidth="1"/>
    <circle cx="162" cy="138" r="13" fill="#f8f8f0" stroke="#d8d8c8" strokeWidth="1"/>
    <circle cx="175" cy="125" r="9" fill="#f0f0e8"/>
    <ellipse cx="122" cy="108" rx="9" ry="8" fill="#c83018" stroke="#8a1808" strokeWidth="1.2"/>
    <ellipse cx="158" cy="128" rx="9" ry="8" fill="#c83018" stroke="#8a1808" strokeWidth="1.2"/>
    <ellipse cx="142" cy="120" rx="8" ry="7" fill="#c83018" stroke="#8a1808" strokeWidth="1"/>
    <ellipse cx="108" cy="135" rx="7" ry="6" fill="#c83018" stroke="#8a1808" strokeWidth="1"/>
    <ellipse cx="175" cy="142" rx="8" ry="7" fill="#c83018" stroke="#8a1808" strokeWidth="1"/>
    <path d="M80 100 Q95 90 112 88 Q130 86 148 88 Q166 90 180 96 Q195 104 200 115" fill="none" stroke="#8a4010" strokeWidth="4" strokeLinecap="round"/>
    <path d="M140 40 Q136 26 140 14" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
  </svg>
);

I.HokkienMee = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="183" rx="112" ry="18" fill="#1a1810"/>
    <path d="M30 130 Q25 155 28 172 Q44 192 140 195 Q236 192 252 172 Q255 155 250 130Z" fill="#1a1408"/>
    <path d="M36 128 Q32 150 36 168 Q52 186 140 189 Q228 186 244 168 Q248 150 244 128Z" fill="#a06015"/>
    <ellipse cx="140" cy="125" rx="102" ry="14" fill="#b07020"/>
    <path d="M72 128 Q85 118 100 110 Q110 118 102 128" stroke="#f5e0a0" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    <path d="M88 128 Q100 112 115 104 Q124 112 116 128" stroke="#f0d898" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    <path d="M105 128 Q116 110 128 102 Q136 110 128 128" stroke="#f5e0a0" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    <path d="M148 116 Q156 106 166 102 Q176 104 178 112 Q176 122 167 127 Q156 128 148 120Z" fill="#e05030" stroke="#a03020" strokeWidth="1.2"/>
    <path d="M185 120 Q182 108 186 100 Q194 96 202 100 Q208 108 205 120 Q200 128 192 128Z" fill="#c89040" stroke="#9a6820" strokeWidth="1"/>
    <path d="M128 103 Q133 92 135 84" stroke="#a0c060" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
    <path d="M120 105 Q116 35 120 22 Q124 10 121 2" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.Laksa = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="182" rx="115" ry="20" fill="#1a1210"/>
    <path d="M28 130 Q22 155 25 175 Q40 195 140 198 Q240 195 255 175 Q258 155 252 130Z" fill="#1e1410"/>
    <path d="M35 128 Q30 150 33 170 Q48 188 140 191 Q232 188 247 170 Q250 150 245 128Z" fill="#c8600a"/>
    <ellipse cx="140" cy="125" rx="103" ry="15" fill="#e07010"/>
    <path d="M75 128 Q80 115 88 108 Q96 115 90 128" stroke="#f5e8c8" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M88 128 Q95 112 105 104 Q112 112 106 128" stroke="#f0e0b8" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M100 128 Q108 110 118 102 Q126 110 120 128" stroke="#f5e8c8" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M155 115 Q162 105 172 102 Q182 104 185 112 Q183 120 174 125 Q162 126 155 118Z" fill="#e05030" stroke="#a03020" strokeWidth="1.2"/>
    <path d="M195 118 Q193 106 196 99 Q202 95 210 98 Q215 105 212 115 Q208 122 200 122Z" fill="#d4a040" stroke="#9a7020" strokeWidth="1.2"/>
    <path d="M52 115 Q48 106 51 99 Q56 93 63 96 Q70 99 68 108 Q66 117 59 118Z" fill="#f5e8c8"/>
    <ellipse cx="59" cy="106" rx="6" ry="6" fill="#f0c840"/>
    <path d="M108 128 Q104 50 108 34" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.ChilliCrab = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="183" rx="112" ry="18" fill="#1a0e08"/>
    <path d="M40 138 Q36 155 40 170 Q58 186 140 188 Q222 186 240 170 Q244 155 240 138Z" fill="#d04018"/>
    <path d="M50 135 Q45 150 48 165 Q65 180 140 182 Q215 180 232 165 Q235 150 230 135Z" fill="#e05020"/>
    <ellipse cx="140" cy="125" rx="88" ry="11" fill="#f06030"/>
    <path d="M95 118 Q88 104 92 92 Q100 80 115 82 Q128 86 125 100 Q120 112 110 118Z" fill="#e85028" stroke="#b03018" strokeWidth="1.5"/>
    <path d="M175 118 Q168 104 172 90 Q180 76 195 78 Q208 82 205 96 Q200 110 190 118Z" fill="#e85028" stroke="#b03018" strokeWidth="1.5"/>
    <path d="M60 118 Q50 108 48 96 Q50 84 62 84 Q72 88 70 100Z" fill="#c84020" stroke="#8a1810" strokeWidth="1.2"/>
    <path d="M220 118 Q228 108 228 96 Q226 84 216 84 Q208 88 210 100Z" fill="#c84020" stroke="#8a1810" strokeWidth="1.2"/>
    <path d="M58 116 Q42 110 35 104 Q34 96 42 94 Q50 96 56 108Z" fill="#c84020"/>
    <path d="M222 116 Q238 110 244 104 Q246 96 238 94 Q230 96 224 108Z" fill="#c84020"/>
    <path d="M205 95 Q210 82 218 78" stroke="#c84020" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <path d="M75 96 Q70 82 62 76" stroke="#c84020" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <path d="M140 80 Q136 64 140 50 Q144 38 141 28" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.SambalStingray = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <path d="M25 153 Q22 168 28 178 Q52 193 140 195 Q228 193 252 178 Q258 168 255 153 Q235 143 200 146 Q160 150 140 150 Q120 150 80 146 Q45 143 25 153Z" fill="#3a5820"/>
    <path d="M30 150 Q28 164 34 174 Q58 188 140 191 Q222 188 246 174 Q252 164 250 150 Q228 140 198 143 Q160 147 140 147 Q120 147 82 143 Q52 140 30 150Z" fill="#4a6828"/>
    <path d="M52 145 Q72 128 100 118 Q120 112 140 112 Q160 112 180 118 Q208 128 228 145 Q220 148 200 145 Q170 140 140 140 Q110 140 80 145 Q60 148 52 145Z" fill="#8a8060" stroke="#6a6040" strokeWidth="1.5"/>
    <path d="M82 140 Q75 135 68 130 Q60 122 56 114 Q55 104 62 102 Q70 104 72 114 Q74 124 78 132Z" fill="#7a7858"/>
    <path d="M198 140 Q205 135 212 130 Q220 122 224 114 Q225 104 218 102 Q210 104 208 114 Q206 124 202 132Z" fill="#7a7858"/>
    <path d="M98 108 Q118 96 140 96 Q162 96 182 108 Q172 100 155 96 Q148 94 140 94 Q130 96 118 96 Q106 100 98 108Z" fill="#c04020"/>
    <path d="M100 112 Q120 102 140 102 Q160 102 180 112" stroke="#e05830" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M236 128 Q244 116 250 110 Q255 112 253 122 Q248 132 238 134Z" fill="#c8e050" stroke="#8ab030" strokeWidth="1"/>
  </svg>
);

I.Gyoza = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="185" rx="115" ry="18" fill="#1a1a1a"/>
    <ellipse cx="224" cy="148" rx="24" ry="5.5" fill="#8a2010"/>
    <path d="M196 150 Q197 160 200 168 Q208 178 224 178 Q240 178 248 168 Q251 160 252 150Z" fill="#1e1808"/>
    <path d="M62 138 Q58 122 63 110 Q68 100 80 97 L118 97 Q130 100 135 110 Q140 122 136 138Z" fill="#f5e0b0" stroke="#c8a060" strokeWidth="1.5"/>
    <path d="M64 138 Q100 144 134 138" stroke="#8a5010" strokeWidth="3" strokeLinecap="round"/>
    <path d="M78 97 Q79 116 80 136" stroke="#c8a060" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
    <path d="M90 97 Q91 116 91 138" stroke="#c8a060" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
    <path d="M102 97 Q103 118 102 138" stroke="#c8a060" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
    <path d="M114 97 Q115 118 114 138" stroke="#c8a060" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
    <path d="M142 135 Q138 118 143 106 Q148 96 160 93 L198 93 Q210 96 215 106 Q220 118 216 135Z" fill="#f5e0b0" stroke="#c8a060" strokeWidth="1.5"/>
    <path d="M144 135 Q179 141 214 135" stroke="#8a5010" strokeWidth="3" strokeLinecap="round"/>
    <path d="M158 93 Q159 112 158 133" stroke="#c8a060" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
    <path d="M170 93 Q171 113 170 133" stroke="#c8a060" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
    <path d="M182 93 Q183 113 182 133" stroke="#c8a060" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
    <path d="M194 93 Q195 113 194 133" stroke="#c8a060" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
    <path d="M88 160 Q82 138 88 120 Q94 106 110 102 L160 102 Q176 106 182 120 Q188 138 182 160Z" fill="#f8e8c0" stroke="#c8a060" strokeWidth="2"/>
    <path d="M90 160 Q135 170 180 160" stroke="#6a3808" strokeWidth="4" strokeLinecap="round"/>
    <ellipse cx="135" cy="164" rx="46" ry="7" fill="#e08a18" opacity="0.6"/>
    <path d="M108 102 Q109 127 108 158" stroke="#b89050" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
    <path d="M122 102 Q123 127 122 158" stroke="#b89050" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
    <path d="M136 102 Q137 127 136 158" stroke="#b89050" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
    <path d="M150 102 Q151 127 150 158" stroke="#b89050" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
    <path d="M135 100 Q132 86 136 72 Q140 60 137 50" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.32"/>
  </svg>
);

I.CrispyChicken = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="183" rx="110" ry="18" fill="#1a1810"/>
    <path d="M58 148 Q52 128 58 108 Q68 82 92 72 L178 75 Q205 88 212 115 Q216 138 208 158 Q180 172 140 173 Q98 172 58 148Z" fill="#c87810" stroke="#8a5008" strokeWidth="2"/>
    <path d="M62 145 Q57 128 62 110 Q71 86 93 78 L178 81 Q202 92 208 118 Q212 138 205 155 Q178 168 140 169 Q100 168 62 145Z" fill="#d88c18"/>
    <ellipse cx="100" cy="96" rx="15" ry="9" fill="#9a5808" opacity="0.55" transform="rotate(-15 100 96)"/>
    <ellipse cx="152" cy="90" rx="12" ry="7" fill="#9a5808" opacity="0.5" transform="rotate(8 152 90)"/>
    <ellipse cx="190" cy="108" rx="10" ry="6" fill="#8a4808" opacity="0.5" transform="rotate(-5 190 108)"/>
    <path d="M62 148 Q100 158 140 160 Q178 158 208 148" stroke="#a06010" strokeWidth="3" strokeLinecap="round"/>
    <path d="M170 72 Q178 56 188 48 Q196 44 205 50 Q210 60 205 72 Q198 82 188 83 Q178 82 170 72Z" fill="#d89020" stroke="#a06010" strokeWidth="1.5"/>
    <path d="M140 70 Q136 52 140 40 Q144 28 141 18" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.TeriyakiChicken = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="182" rx="108" ry="18" fill="#1a1810"/>
    <path d="M60 145 Q56 127 63 105 Q74 80 97 73 L174 76 Q197 85 206 110 Q213 132 206 152 Q180 166 140 167 Q98 166 60 145Z" fill="#4a2c14"/>
    <ellipse cx="105" cy="100" rx="14" ry="8" fill="#6a3a10" opacity="0.6" transform="rotate(-12 105 100)"/>
    <ellipse cx="158" cy="92" rx="11" ry="7" fill="#6a3a10" opacity="0.55" transform="rotate(8 158 92)"/>
    <ellipse cx="192" cy="118" rx="10" ry="6" fill="#5a2c08" opacity="0.5"/>
    <path d="M70 90 Q90 82 115 80 Q135 78 155 82 Q178 88 195 100 Q210 115 208 135 Q200 148 180 155" stroke="#d08020" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    <path d="M68 125 Q98 115 140 117 Q178 115 208 125" stroke="#e09828" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
    <ellipse cx="112" cy="90" rx="2.5" ry="1.5" fill="#f5e0a0" transform="rotate(-20 112 90)"/>
    <ellipse cx="135" cy="86" rx="2.5" ry="1.5" fill="#f0d898" transform="rotate(10 135 86)"/>
    <ellipse cx="156" cy="89" rx="2.5" ry="1.5" fill="#f5e0a0" transform="rotate(-5 156 89)"/>
    <path d="M48 128 Q36 120 34 110 Q36 100 46 102 Q54 108 52 120Z" fill="#4a8a2a" stroke="#2a6010" strokeWidth="1"/>
    <path d="M235 118 Q245 110 250 102 Q252 94 246 92 Q240 94 238 104 Q236 112 236 118Z" fill="#4a8a2a" stroke="#2a6010" strokeWidth="1"/>
    <path d="M140 68 Q136 52 140 38 Q144 26 141 16" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.CharSiu = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <path d="M55 165 Q50 145 55 130 L225 130 Q230 145 225 165 Q200 185 140 188 Q80 185 55 165Z" fill="#2a2418"/>
    <ellipse cx="140" cy="130" rx="85" ry="12" fill="#1a1610" stroke="#3a3020" strokeWidth="1.5"/>
    <path d="M72 125 Q70 105 72 90 Q75 78 85 72 L130 72 Q138 78 140 90 Q141 105 140 125Z" fill="#c03020" stroke="#8a1810" strokeWidth="1.5"/>
    <path d="M82 82 Q105 76 128 80 Q128 88 105 84 Q82 90 82 82Z" fill="#e06030" opacity="0.5"/>
    <path d="M95 122 Q93 100 96 83 Q100 70 110 64 L158 64 Q166 70 168 83 Q169 100 168 122Z" fill="#c83822" stroke="#8a1810" strokeWidth="1.5"/>
    <path d="M106 74 Q132 68 160 73" stroke="#f08040" strokeWidth="2" strokeLinecap="round" opacity="0.45"/>
    <path d="M100 94 Q128 88 162 94" stroke="#f0c090" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    <path d="M120 120 Q118 98 122 80 Q126 67 136 61 L182 61 Q190 67 192 80 Q193 98 191 120Z" fill="#c03020" stroke="#8a1810" strokeWidth="1.5"/>
    <path d="M132 71 Q157 65 184 70" stroke="#f07830" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M125 91 Q152 85 186 91" stroke="#f0c090" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    <ellipse cx="105" cy="62" rx="2.5" ry="1.5" fill="#f5e0a0" transform="rotate(-20 105 62)"/>
    <ellipse cx="135" cy="58" rx="2.5" ry="1.5" fill="#f0d898" transform="rotate(10 135 58)"/>
    <ellipse cx="162" cy="60" rx="2.5" ry="1.5" fill="#f5e0a0" transform="rotate(-5 162 60)"/>
    <path d="M148 58 Q145 44 149 32 Q153 20 150 10" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

I.PorkBelly = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="183" rx="108" ry="18" fill="#1a1a18"/>
    {[0,1,2].map(i=>{
      const x=70+(i*50), w=76;
      return <g key={i}>
        <path d={`M${x} 155 Q${x-4} 128 ${x-2} 100 Q${x+2} 78 ${x+14} 68 L${x+w-14} 68 Q${x+w+2} 78 ${x+w+2} 100 Q${x+w+4} 128 ${x+w} 155Z`} fill="#f5f0e8" stroke="#d0c8b8" strokeWidth="1.5"/>
        <path d={`M${x+4} 148 Q${x+2} 125 ${x+4} 100 Q${x+8} 82 ${x+18} 74 L${x+w-18} 74 Q${x+w-8} 82 ${x+w-4} 100 Q${x+w-2} 125 ${x+w-4} 148Z`} fill="#f8e8d8"/>
        <path d={`M${x} 120 Q${x+w/2} 115 ${x+w} 120`} stroke="#e0c8a8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d={`M${x} 155 Q${x+w/2} 148 ${x+w} 155`} stroke="#9a5808" strokeWidth="3" strokeLinecap="round"/>
        <path d={`M${x} 155 Q${x+w/2} 163 ${x+w} 155`} fill="#c87010" opacity="0.6"/>
        <ellipse cx={x+w/2} cy={68} rx={w/2} ry={10} fill="#888078" stroke="#686058" strokeWidth="1.5"/>
        <ellipse cx={x+w/2} cy={66} rx={w/2-2} ry={8} fill="#a0988a"/>
        <path d={`M${x+12} 65 Q${x+w/2} 60 ${x+w-12} 65`} stroke="#c8c0b0" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </g>;
    })}
    <path d="M140 58 Q136 42 140 28 Q144 16 141 6" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.Bulgogi = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <path d="M44 146 Q40 163 44 175 Q62 192 140 195 Q218 192 236 175 Q240 163 236 146Z" fill="#a04c18"/>
    <ellipse cx="140" cy="135" rx="73" ry="11" fill="#d07030"/>
    <path d="M85 130 Q108 118 130 120 Q115 128 95 132Z" fill="#4a2008"/>
    <path d="M155 125 Q175 115 195 120 Q178 128 158 130Z" fill="#4a2008"/>
    <path d="M78 132 Q82 116 90 108 Q100 102 112 106 Q118 114 112 126Z" fill="#c84018" stroke="#8a1808" strokeWidth="1"/>
    <path d="M122 130 Q126 112 135 104 Q148 98 158 102 Q162 114 155 126Z" fill="#c03818" stroke="#8a1808" strokeWidth="1"/>
    <path d="M165 130 Q168 112 178 106 Q190 100 198 106 Q200 118 192 128Z" fill="#c84018" stroke="#8a1808" strokeWidth="1"/>
    <path d="M78 128 Q76 115 80 104 Q88 94 98 96 Q104 104 100 118Z" fill="#d04820"/>
    <path d="M200 126 Q205 114 202 104 Q198 94 190 96 Q184 104 188 118Z" fill="#d04820"/>
    <path d="M78 128 Q85 120 95 122 Q98 130 88 134Z" fill="#a0c858" opacity="0.7"/>
    <path d="M155 125 Q162 118 170 122 Q168 130 160 130Z" fill="#a0c858" opacity="0.7"/>
    <ellipse cx="95" cy="120" rx="2.5" ry="1.5" fill="#f5e0a0" transform="rotate(-10 95 120)"/>
    <ellipse cx="145" cy="116" rx="2.5" ry="1.5" fill="#f0d898" transform="rotate(10 145 116)"/>
    <path d="M140 130 Q136 42 140 26 Q144 12 141 2" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.ScallionBeef = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <path d="M50 142 Q46 158 50 170 Q68 186 140 189 Q212 186 230 170 Q234 158 230 142Z" fill="#8a5020"/>
    <ellipse cx="140" cy="138" rx="88" ry="13" fill="#aa6830"/>
    <path d="M78 132 Q84 118 92 112 Q104 104 118 108 Q125 118 120 130Z" fill="#4a2808"/>
    <path d="M118 128 Q124 114 134 108 Q148 102 158 108 Q162 118 155 130Z" fill="#4a2808"/>
    <path d="M165 130 Q170 114 180 108 Q194 102 204 108 Q208 120 200 130Z" fill="#4a2808"/>
    <path d="M78 130 Q74 118 78 108 Q86 98 96 100 Q102 108 98 122Z" fill="#5a3010"/>
    <path d="M200 130 Q206 118 204 108 Q200 98 192 100 Q186 108 190 122Z" fill="#5a3010"/>
    <path d="M72 130 Q65 118 68 110 Q80 122 78 134Z" fill="#5a8a20" stroke="#3a6010" strokeWidth="1"/>
    <path d="M108 130 Q100 118 102 108 Q114 120 112 132Z" fill="#4a7818"/>
    <path d="M158 128 Q150 116 152 108 Q164 118 162 130Z" fill="#5a8a20"/>
    <path d="M205 128 Q212 118 210 108 Q200 120 202 132Z" fill="#4a7818"/>
    <path d="M78 118 Q90 108 105 114" stroke="#8aaa40" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M128 114 Q142 108 155 114" stroke="#7a9a38" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M175 118 Q188 110 200 116" stroke="#8aaa40" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M140 142 Q136 54 140 38 Q144 24 141 14" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.MisoBlackCod = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="178" rx="112" ry="20" fill="#1a1a1a"/>
    <path d="M52 140 Q48 110 55 85 Q65 60 90 55 L200 58 Q222 64 228 90 Q232 115 226 142 Q180 155 140 157 Q95 158 52 140Z" fill="#c8780a" stroke="#8a5008" strokeWidth="2"/>
    <path d="M60 125 Q58 100 64 78 Q72 58 90 55 L200 58 Q218 63 223 82 Q226 105 222 128 Q180 145 140 147 Q95 148 60 125Z" fill="#d4880c"/>
    <path d="M80 80 Q130 70 190 78 Q210 85 215 100 Q180 88 130 86 Q95 88 80 80Z" fill="#f0a820" opacity="0.5"/>
    <path d="M85 95 Q100 88 120 92 Q100 100 85 95Z" fill="#5a3008" opacity="0.55"/>
    <path d="M150 90 Q168 84 185 89 Q168 97 150 90Z" fill="#5a3008" opacity="0.5"/>
    <path d="M72 108 Q95 102 118 106" stroke="#a86008" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
    <path d="M80 120 Q108 114 135 118" stroke="#a86008" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M218 108 Q232 100 242 106 Q245 114 238 120 Q226 124 218 116Z" fill="#f5c8a0" stroke="#c8906a" strokeWidth="1"/>
    <path d="M55 130 Q40 125 35 115 Q36 108 44 110 Q50 118 62 122Z" fill="#5a8a3a" stroke="#3a6a2a" strokeWidth="1"/>
    <ellipse cx="130" cy="72" rx="2.5" ry="1.5" fill="#f5e0a0" transform="rotate(-15 130 72)"/>
    <ellipse cx="145" cy="68" rx="2.5" ry="1.5" fill="#f5e0a0" transform="rotate(10 145 68)"/>
    <path d="M115 55 Q112 42 116 30 Q120 18 117 8" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.MeatPie = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="183" rx="108" ry="18" fill="#1a1810"/>
    <path d="M55 152 Q52 130 58 110 Q70 82 100 70 L180 70 Q210 82 222 110 Q228 130 225 152 Q200 170 140 172 Q80 170 55 152Z" fill="#d8a028"/>
    <path d="M65 142 Q63 124 68 108 Q78 84 104 75 L176 75 Q202 84 212 108 Q217 124 215 142" fill="none" stroke="#e8b030" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <path d="M70 125 Q95 115 140 118 Q185 115 210 125" stroke="#e8b030" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
    <ellipse cx="110" cy="90" rx="12" ry="7" fill="#b88020" opacity="0.5" transform="rotate(-10 110 90)"/>
    <ellipse cx="165" cy="88" rx="10" ry="6" fill="#b88020" opacity="0.45" transform="rotate(8 165 88)"/>
    <path d="M58 148 Q70 155 88 158 Q88 148 80 142 Q68 138 58 142Z" fill="#6a3808"/>
    <path d="M64 155 Q56 148 55 140 L60 138 Q65 145 68 154Z" fill="#5a2808"/>
    <path d="M118 68 Q118 56 128 48 Q140 44 152 50 Q155 62 148 70 Q140 74 130 72Z" fill="#c89020" stroke="#8a6010" strokeWidth="1.5"/>
    <path d="M195 162 Q210 155 215 145 Q208 148 200 155 Q196 160 195 162Z" fill="#c03020"/>
    <path d="M200 160 Q212 152 214 144" stroke="#e04030" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <path d="M140 66 Q136 50 140 36 Q144 24 141 14" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.LavaCake = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="182" rx="108" ry="18" fill="#1a1a1a"/>
    <path d="M100 170 Q108 178 140 180 Q172 178 180 170 Q172 162 140 160 Q108 162 100 170Z" fill="#6a3010"/>
    <path d="M90 155 Q85 125 88 100 Q92 78 105 72 L175 72 Q188 78 192 100 Q195 125 190 155Z" fill="#2a1408"/>
    <ellipse cx="140" cy="72" rx="70" ry="12" fill="#4a2410"/>
    <ellipse cx="140" cy="68" rx="18" ry="4.5" fill="#e07820"/>
    <ellipse cx="140" cy="67" rx="12" ry="3" fill="#f09030" opacity="0.8"/>
    <ellipse cx="135" cy="67" rx="5" ry="2" fill="#f8b040" opacity="0.6"/>
    <path d="M115 152 Q105 158 98 168 Q102 175 114 176 Q130 178 140 175 Q130 168 120 158Z" fill="#3a1808"/>
    <path d="M162 155 Q170 162 175 172 Q168 177 155 176 Q145 174 148 165 Q152 158 162 155Z" fill="#3a1808"/>
    <path d="M195 130 Q192 115 196 105 Q200 95 208 95 Q218 95 222 105 Q226 115 223 130Z" fill="#f5e8c8"/>
    <ellipse cx="208" cy="92" rx="12" ry="8" fill="#fff8ec"/>
    <path d="M218 125 Q225 118 232 120 Q234 127 228 131 Q220 132 218 125Z" fill="#3a7830"/>
    <path d="M140 56 Q137 42 141 30 Q145 18 142 8" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

I.SpringRoll = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="183" rx="110" ry="18" fill="#1a1810"/>
    <path d="M62 145 Q58 125 65 105 Q72 88 88 82 L195 82 Q210 88 216 105 Q222 125 218 145 Q195 158 140 160 Q85 158 62 145Z" fill="#d8a028"/>
    <path d="M65 142 Q62 124 68 106 Q74 90 89 85 L194 85 Q208 90 213 106 Q218 124 215 142 Q193 154 140 156 Q87 154 65 142Z" fill="#e8b030"/>
    <path d="M65 125 Q95 115 140 118 Q185 115 215 125" stroke="#f0b838" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
    <ellipse cx="95" cy="100" rx="12" ry="7" fill="#b88020" opacity="0.5" transform="rotate(-8 95 100)"/>
    <ellipse cx="145" cy="95" rx="10" ry="6" fill="#b88020" opacity="0.45"/>
    <ellipse cx="192" cy="100" rx="10" ry="6" fill="#a87010" opacity="0.4" transform="rotate(5 192 100)"/>
    <path d="M62 148 L62 145 Q58 135 62 128 Q68 138 68 148Z" fill="#a06010"/>
    <path d="M218 148 L218 145 Q222 135 218 128 Q212 138 212 148Z" fill="#a06010"/>
    <ellipse cx="140" cy="82" rx="54" ry="6" fill="#e8b028" stroke="#b88018" strokeWidth="1"/>
    <path d="M42 142 Q48 130 56 126 Q64 128 62 140 Q56 148 46 148Z" fill="#f5e0c0" stroke="#c8a870" strokeWidth="1.2"/>
    <path d="M228 138 Q236 126 242 128 Q246 136 242 146 Q234 150 226 146Z" fill="#f5e0c0" stroke="#c8a870" strokeWidth="1.2"/>
    <path d="M140 80 Q136 64 140 50 Q144 36 141 26" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);

I.Cookies = () => (
  <svg viewBox="0 0 280 210" fill="none">
    <ellipse cx="140" cy="185" rx="110" ry="17" fill="#1a1810"/>
    <ellipse cx="100" cy="158" rx="68" ry="40" fill="#c87810" stroke="#8a5008" strokeWidth="1.5" transform="rotate(-8 100 158)"/>
    <ellipse cx="98" cy="153" rx="60" ry="34" fill="#e89828" transform="rotate(-8 98 153)"/>
    <ellipse cx="70" cy="142" rx="8" ry="5" fill="#5a2808" opacity="0.65" transform="rotate(10 70 142)"/>
    <ellipse cx="95" cy="135" rx="7" ry="4.5" fill="#4a1808" opacity="0.6" transform="rotate(-5 95 135)"/>
    <ellipse cx="85" cy="162" rx="7" ry="4.5" fill="#5a2808" opacity="0.6" transform="rotate(15 85 162)"/>
    <ellipse cx="115" cy="158" rx="6" ry="4" fill="#4a1808" opacity="0.55" transform="rotate(-8 115 158)"/>
    <circle cx="75" cy="155" r="4" fill="#2a1008" opacity="0.5"/>
    <circle cx="98" cy="148" r="3.5" fill="#3a1408" opacity="0.45"/>
    <ellipse cx="180" cy="149" rx="70" ry="40" fill="#d88820" transform="rotate(6 180 149)"/>
    <ellipse cx="178" cy="147" rx="64" ry="36" fill="#e89828" transform="rotate(6 178 147)"/>
    <ellipse cx="162" cy="140" rx="8" ry="5" fill="#5a2808" opacity="0.65" transform="rotate(-12 162 140)"/>
    <ellipse cx="188" cy="132" rx="7" ry="4.5" fill="#4a1808" opacity="0.6" transform="rotate(8 188 132)"/>
    <ellipse cx="200" cy="155" rx="7" ry="4.5" fill="#5a2808" opacity="0.6" transform="rotate(-5 200 155)"/>
    <circle cx="175" cy="152" r="4" fill="#2a1008" opacity="0.5"/>
    <circle cx="196" cy="143" r="3.5" fill="#3a1408" opacity="0.45"/>
    <path d="M128 115 Q125 102 128 92 Q138 86 150 90 Q155 98 152 110 Q146 118 136 118Z" fill="#5a2808"/>
    <ellipse cx="135" cy="100" rx="3" ry="2" fill="#e89010" opacity="0.6"/>
    <path d="M140 88 Q136 70 140 56 Q144 42 141 32" stroke="#f5e8c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
);


const RECIPES = [
  {id:1,cat:"Breakfast",name:"Sourdough Toast",tagline:"Golden crust, buttery crumb",temp:"260°C",fan:"100%",mw:"0%",time:"0:40",acc:"Full Size Tray",Illus:I.SourdoughToast,
   ing:["2 slices sourdough (2cm thick)","30g salted butter","Peach jam to serve"],
   steps:["Slice sourdough to 2cm. Brush both sides lightly with butter.","Place directly onto full size tray.","Cook 260°C · Fan 100% · MW 0% · 40 seconds.","Serve immediately with butter and jam."],
   why:"Zero microwave is intentional — impingement alone drives the Maillard reaction on both surfaces simultaneously. The tray conducts bottom heat while jets hit the top. A toaster works in one direction. This works in both."},
  {id:2,cat:"Breakfast",name:"Creamy Scrambled Egg",tagline:"Silky — never rubbery",temp:"260°C",fan:"20%",mw:"40%",time:"0:45",acc:"½L Signature Container",Illus:I.ScrambledEgg,
   ing:["2 large eggs","76ml cream","2g sea salt","10g butter","2 pcs brioche","120g vine tomato"],
   steps:["Whisk eggs, cream and salt. Pour into ½L container with butter.","Cook 260°C · Fan 20% · MW 40% · 45 seconds.","Toast brioche separately: Fan 100% · MW 0% · 30 seconds.","Serve with vine tomato roasted at Fan 80% · 20 seconds."],
   why:"Low fan (20%) — scrambled egg has no surface to brown, high impingement would dry the top before the interior sets. 40% microwave heats through water and fat in the egg gently."},
  {id:3,cat:"Breakfast",name:"English Breakfast",tagline:"Full plate in under 4 minutes",temp:"260°C",fan:"80%",mw:"60%",time:"3:30",acc:"Colour Trays + ½L Container",Illus:I.EnglishBreakfast,
   ing:["3 large eggs","75ml cream","50g back bacon","75g pork sausage","60g baked beans","80g potato","40g vine tomato","50g mushrooms","2 pcs brioche"],
   steps:["Whisk eggs with cream into ½L container.","Potato with butter into green quarter tray.","Mushrooms and tomato into second green quarter tray.","Sausage and bacon into red quarter tray.","Multi-stage: potato first (1:00) → proteins (1:30) → eggs (0:40) → toast (0:20)."],
   why:"Multi-stage loading is essential — potato is densest and needs most time. Red/green tray separation maintains allergen protocols. 60% microwave on eggs heats gently without scrambling hard."},
  {id:4,cat:"Breakfast",name:"Stuffed French Toast",tagline:"Mango filled golden brioche",temp:"260°C",fan:"85%",mw:"25%",time:"0:55",acc:"Full Size Tray",Illus:I.FrenchToast,
   ing:["2 pcs thick brioche","120g fresh mango","1 egg","25ml milk","7g sugar","7ml cream","Cinnamon, nutmeg","30g maple syrup"],
   steps:["Slice brioche thickly. Cut pocket through centre. Stuff with mango.","Whisk egg, milk, sugar, cream, cinnamon, nutmeg into batter.","Soak stuffed brioche in batter, coating both sides.","Cook 260°C · Fan 85% · MW 25% · 55 seconds.","Serve with maple syrup and mascarpone."],
   why:"Low MW (25%) prevents the egg batter from cooking hard before the brioche is golden. The cinnamon and sugar in the batter are molecular triggers — they absorb MW energy and brown faster than plain dough."},
  {id:5,cat:"Bakery",name:"Naan",tagline:"Authentic char, soft interior",temp:"260°C",fan:"100%",mw:"0%",time:"0:45",acc:"Cook Plate",Illus:I.Naan,
   ing:["225g all-purpose flour","½ cup warm yogurt","1 tsp sugar","10g active dry yeast","½ cup warm water","1 tsp salt","1 tbsp oil","Melted butter to finish"],
   steps:["Activate yeast in warm water with sugar — 10 mins until foamy.","Combine with flour, yogurt, salt, oil. Knead 10 mins. Rest 1 hour.","Roll each portion to 8-inch round.","Place on cook plate. Cook 260°C · Fan 100% · MW 0% · 45 seconds, flip at 30s.","Brush with butter. Serve immediately."],
   why:"Zero microwave — naan is a pure impingement cook. The cook plate at 260°C conducts heat to the bottom while 100% fan creates authentic charred blisters on top, replicating the tandoor oven effect."},
  {id:6,cat:"Bakery",name:"Chorizo Pizza",tagline:"Crispy base, melted buffalo mozzarella",temp:"260°C",fan:"100%",mw:"10%",time:"1:30",acc:"Non-stick Liner Natural",Illus:I.ChorizoPizza,
   ing:["225g plain flour","7g dried yeast","185ml lukewarm water","½ tsp salt","125ml tomato passata","250g fresh chorizo (sliced)","250g buffalo mozzarella (torn)"],
   steps:["Make dough: yeast + water, rest 10 mins. Mix flour, salt. Knead. Rest 30 mins.","Roll out on non-stick liner. Spread passata. Top with chorizo and mozzarella.","Cook 260°C · Fan 100% · MW 10% · 1:30."],
   why:"Very low MW (10%) allows the dough base to dry and crisp through impingement alone without steaming from within. 100% fan = maximum impingement = maximum pizza base crispness."},
  {id:7,cat:"Noodles",name:"Hokkien Prawn Mee",tagline:"Wok-hei flavour from a countertop oven",temp:"260°C",fan:"60%",mw:"80%",time:"2:30",acc:"1½L Container",Illus:I.HokkienMee,
   ing:["3 medium prawns","50g squid","80g pork belly","2 eggs (beaten)","250g yellow noodles","150g rice vermicelli","60g bean sprouts","300ml prawn stock","Fish sauce, garlic, chives, sambal"],
   steps:["Cook oil, garlic and egg in 1½L container (0:30 · Fan 80% · MW 60%).","Add prawn stock, noodles, bee hoon, prawns, squid and pork belly.","Cook 260°C · Fan 60% · MW 80% · 2:00.","Add bean sprouts and chives final 0:20 at Fan 40%."],
   why:"High MW (80%) drives the broth to temperature rapidly. Low fan (60%) prevents the noodle surface from drying while the broth rehydrates. Bean sprouts go in last to retain crunch."},
  {id:8,cat:"Noodles",name:"Laksa",tagline:"Rich coconut curry noodle soup",temp:"260°C",fan:"20%",mw:"85%",time:"2:00",acc:"1½L Container",Illus:I.Laksa,
   ing:["4 tbsp laksa paste","400ml coconut milk","200ml chicken stock","200g rice vermicelli (soaked)","150g tofu puffs","150g prawns","150g bean sprouts","Fresh laksa leaves","2 boiled eggs"],
   steps:["Activate paste in container (0:30 · Fan 60% · MW 40%).","Add coconut milk and stock. Cook 0:45 · Fan 20% · MW 85%.","Add noodles, prawns and tofu puffs. Final 0:45 · Fan 20% · MW 80%.","Top with bean sprouts, halved eggs and laksa leaves."],
   why:"Coconut milk is high fat and high water — a very strong MW absorber. Very low fan (20%) prevents surface skin forming. The paste activation step blooms the spices in fat before liquid dilutes them."},
  {id:9,cat:"Seafood",name:"Singapore Chilli Crab",tagline:"Singapore's iconic dish at speed",temp:"260°C",fan:"30%",mw:"80%",time:"3:00",acc:"1½L Container",Illus:I.ChilliCrab,
   ing:["1.5kg mud crab (cleaned, cut 8 pieces)","1 tbsp sambal","½ cup sweet chilli sauce","2 tbsp ketchup","2 cups water","1 egg (whisked)","1 tbsp potato starch","Coriander and spring onion"],
   steps:["Combine all sauce ingredients in 1½L container.","Add crab pieces. Cook 260°C · Fan 30% · MW 80% · 2:30.","Stir in egg mixture and potato starch. Return 0:30 to thicken.","Garnish with coriander. Serve with mantou."],
   why:"Crab shell blocks direct MW penetration — high MW heats the sauce liquid which conducts heat through the shell to the meat. Low fan (30%) keeps the liquid sauce stable."},
  {id:10,cat:"Seafood",name:"Miso Black Cod",tagline:"Nobu-style lacquered glaze",temp:"260°C",fan:"70%",mw:"45%",time:"1:15",acc:"Blue Full Size Tray",Illus:I.MisoBlackCod,
   ing:["2 black cod fillets (400g)","¼ cup sake","¼ cup mirin","4 tbsp white miso paste","3 tbsp sugar"],
   steps:["Mix marinade: sake, mirin, miso, sugar.","Pat cod dry. Submerge in marinade. Refrigerate 24 hours minimum.","Remove, lightly wipe off excess miso — do not rinse.","Cook 260°C · Fan 70% · MW 45% · 1:15."],
   why:"Black cod has very high fat content — a strong MW absorber. The miso residue is high in sugar — it caramelises rapidly under impingement, creating the characteristic lacquered finish."},
  {id:11,cat:"Seafood",name:"Sambal Stingray",tagline:"Hawker-style on banana leaf",temp:"260°C",fan:"85%",mw:"40%",time:"2:30",acc:"Blue Full Size Tray",Illus:I.SambalStingray,
   ing:["400g stingray wing","Banana leaf","Salt","Sambal: dried chillies, belacan, shallots, garlic, ginger, lemongrass, tamarind, palm sugar"],
   steps:["Fry sambal paste 15 mins until darkened. Season with palm sugar and tamarind.","Place stingray on banana leaf, white side up. Season with salt.","Cook 260°C · Fan 85% · MW 40% · 2:00 until 70% done.","Spread sambal on top. Cook final 0:30. Serve with calamansi."],
   why:"The banana leaf acts as a natural thermal barrier, preventing direct conduction burns while adding flavour. The 70% cook before sambal application mirrors traditional hawker charcoal technique."},
  {id:12,cat:"Seafood",name:"Shrimp Gyoza",tagline:"Crispy bottom, juicy filling",temp:"260°C",fan:"60%",mw:"50%",time:"1:30",acc:"12x Dumpling Tray — Optional",Illus:I.Gyoza,
   ing:["350g shrimp (chopped fine)","½ tsp grated ginger","½ cup shredded cabbage","1 tbsp scallion","1 tsp sake","1 tsp mirin","1 tsp sesame oil","½ tsp salt","20 gyoza wrappers"],
   steps:["Combine shrimp filling, mix until sticky.","Fill wrappers, pleat and seal firmly.","Fill each dumpling tray cavity ½ with water. Place gyoza. Spray oil on bases.","Cook 260°C · Fan 60% · MW 50% · 1:30."],
   why:"The dumpling tray water technique replicates pan-steam-fry in one step. MW (50%) heats the water to near-boiling, steaming the tops while cooking the filling. Impingement crisps the exposed surface."},
  {id:13,cat:"Poultry",name:"Crispy Chicken Thigh",tagline:"Crackling skin, juicy inside",temp:"260°C",fan:"90%",mw:"70%",time:"2:30",acc:"Air Frying Tray — Optional Purchase",Illus:I.CrispyChicken,
   ing:["180g boneless chicken thigh (skin-on)","5g sea salt","3g black pepper","5g garlic powder","10ml olive oil"],
   steps:["Score chicken skin in crosshatch. Season generously.","Brush skin with olive oil.","Place skin-side up on air frying tray over full size black tray.","Cook 260°C · Fan 90% · MW 70% · 2:30.","Rest 2 minutes before serving."],
   why:"The optional air frying tray elevates the chicken so impingement attacks both surfaces simultaneously. 70% MW drives the dense thigh meat to safe core temperature. Fan at 90% maximises skin crisping."},
  {id:14,cat:"Poultry",name:"Teriyaki Chicken",tagline:"Glazed, caramelised, APAC favourite",temp:"260°C",fan:"80%",mw:"60%",time:"1:45",acc:"Full Size Tray Black",Illus:I.TeriyakiChicken,
   ing:["2 chicken thighs (boneless)","3 tbsp soy sauce","2 tbsp mirin","2 tbsp sake","1 tbsp sugar","Sesame seeds and spring onion"],
   steps:["Marinate chicken in teriyaki sauce 30 minutes minimum.","Place on black tray, skin-side up. Reserve marinade.","Cook 260°C · Fan 80% · MW 60% · 1:15.","Brush with reserved marinade. Cook final 0:30.","Garnish with sesame and spring onion."],
   why:"Teriyaki sauce is high in sugar — applying it in the final 30 seconds prevents the sugar from burning during the main cook. Reserved marinade application triggers rapid Maillard + caramelisation in those final seconds."},
  {id:15,cat:"Pork",name:"Char Siu BBQ Pork",tagline:"Cantonese red BBQ pork — APAC classic",temp:"260°C",fan:"80%",mw:"60%",time:"1:30",acc:"Full Size Tray Black",Illus:I.CharSiu,
   ing:["200g pork shoulder (sliced 8mm)","30g char siu sauce","10g honey","5g five spice","5g sesame oil","10g soy sauce"],
   steps:["Marinate pork slices minimum 2 hours.","Place in single layer on black tray — no overlapping.","Cook 260°C · Fan 80% · MW 60% · 1:30.","Rest 1 minute. Serve over rice."],
   why:"Char siu sauce is high in sugar — fan is kept at 80% to prevent the glaze burning before the pork cooks through. 60% MW penetrates the 8mm slices evenly. Sugar, sesame oil and soy simultaneously trigger all three molecular absorber groups."},
  {id:16,cat:"Pork",name:"Crispy Pork Belly",tagline:"Crackling skin — the 70/30 technique",temp:"260°C",fan:"100%",mw:"0%",time:"0:45",acc:"Full Size Tray Black",Illus:I.PorkBelly,
   ing:["1kg pork belly","6 cloves garlic","1 tsp five spice","Kosher salt for skin","Slow roast + blast chill required (pre-cook)"],
   steps:["Steam pork belly 10 mins. Pat completely dry.","Spike skin evenly. Apply generous salt layer.","Slow roast conventionally 78°C for 8 hours. Blast chill. Portion into squares.","MERRYCHEF FINISH: Skin-side up. Cook 260°C · Fan 100% · MW 0% · 45 seconds.","Serve immediately — crackling loses crunch within minutes."],
   why:"This is the 70/30 technique. The 8-hour slow roast renders all fat and cooks the meat. The Merrychef's role is pure impingement crisping. Zero MW — any microwave energy would drive moisture to the surface, destroying the dry skin needed for crackling."},
  {id:17,cat:"Pork",name:"Korean Pork Bulgogi",tagline:"Spicy, caramelised, deeply flavoured",temp:"260°C",fan:"70%",mw:"65%",time:"2:00",acc:"Half Size Tray Black",Illus:I.Bulgogi,
   ing:["500g pork belly (thinly sliced)","½ onion (sliced)","3 tbsp gochujang","2 tbsp soy sauce","2 tbsp rice wine","2 tbsp sugar","1 tbsp sesame oil","Garlic, ginger"],
   steps:["Mix all marinade. Combine with pork and onion. Marinate minimum 1 hour.","Place in half size tray.","Cook 260°C · Fan 70% · MW 65% · 2:00 until caramelised.","Serve immediately with steamed rice."],
   why:"Gochujang contains sugar, chilli and fermented proteins — all MW triggers. 65% MW heats through the marinated meat evenly. 70% fan creates caramelisation on the edges — the slight charring is essential to bulgogi's character."},
  {id:18,cat:"Beef",name:"Onion Scallion Beef",tagline:"Chinese stir-fry in a container",temp:"260°C",fan:"60%",mw:"75%",time:"1:30",acc:"1½L Container",Illus:I.ScallionBeef,
   ing:["280g beef tenderloin (thinly sliced)","½ onion (sliced)","3 cloves garlic","3 stalks scallion","1 tsp cornstarch, 1 tsp soy, 1 tsp Shaoxing wine","Oyster sauce, dark soy, sesame oil, sugar"],
   steps:["Marinate beef 10 minutes. Mix sauce separately.","Add oil, marinated beef, garlic and onion to 1½L container.","Cook 0:45 · Fan 60% · MW 75% until beef is half done.","Add sauce. Cook final 0:45.","Add scallions, toss and serve."],
   why:"The container functions as a wok — enclosed heat environment. 75% MW generates rapid heat through the high-moisture marinade. Two-stage cook prevents the sugar in the sauce burning while the protein is still releasing moisture."},
  {id:19,cat:"Beef",name:"Aussie Meat Pie",tagline:"Regenerated to perfection — two stage",temp:"260°C",fan:"20%",mw:"75%",time:"1:30",acc:"Cook Plate",Illus:I.MeatPie,
   ing:["Pre-made beef pie (chilled or frozen)","Tomato sauce to serve"],
   steps:["Place chilled pie on cook plate.","Stage 1: 0:15 · Fan 10% · MW 75% — heat the filling through.","Stage 2: 0:30 · Fan 60% · MW 0% — crisp and colour the pastry.","Serve with tomato sauce."],
   why:"Two-stage regeneration is correct for pastry. Stage 1: high MW heats the dense wet filling, minimal fan so pastry doesn't colour yet. Stage 2: zero MW, increased fan restores pastry crispness. Heat with MW, crisp with impingement — never both simultaneously for pastry."},
  {id:20,cat:"Dessert",name:"Molten Chocolate Lava Cake",tagline:"Set outside, liquid inside — 55 seconds",temp:"260°C",fan:"80%",mw:"50%",time:"0:55",acc:"12x Non-stick Mould — Optional",Illus:I.LavaCake,
   ing:["155g dark chocolate","125g unsalted butter","3 tsp instant coffee","2 eggs + 2 yolks","75g caster sugar","35g plain flour","Cocoa powder to dust"],
   steps:["Melt chocolate, butter and coffee together. Cool 10 minutes.","Beat eggs, yolks and sugar until thick and creamy.","Fold into chocolate with flour.","Fill non-stick mould cavities to ⅔.","Cook 260°C · Fan 80% · MW 50% · 55 seconds exactly.","Turn immediately onto plate. Serve within 60 seconds."],
   why:"The molten centre depends on stopping before the centre sets. 50% MW heats through the chocolate-fat matrix to the tipping point. Fan (80%) sets the outer shell via Maillard. Coffee granules enhance MW absorption — not just for flavour."},
  {id:21,cat:"Dessert",name:"Apple Pie Spring Roll",tagline:"Air fried crispy — no oil",temp:"260°C",fan:"100%",mw:"0%",time:"1:00",acc:"Air Frying Tray — Optional Purchase",Illus:I.SpringRoll,
   ing:["3 cups apple (cubed)","2 tbsp butter","¼ cup caster sugar","1 tbsp cinnamon","1 tbsp cornflour","4 tbsp water","10 spring roll sheets"],
   steps:["Cook apples with butter and cinnamon 2 minutes. Add water, cook 3–4 mins. Add cornflour, cook until thickened. Cool.","Fill spring roll sheets with 2 tbsp filling each. Roll and seal tightly.","Place on air frying tray over solid black tray.","Cook 260°C · Fan 100% · MW 0% · 1:00."],
   why:"Zero MW is essential — spring roll pastry must dry through impingement heat alone. Moisture from MW would make the pastry translucent and soggy. 100% fan circulates hot air completely around each roll including underneath."},
  {id:22,cat:"Dessert",name:"Chewy Chocolate Chip Cookies",tagline:"Crispy edge, gooey centre",temp:"220°C",fan:"60%",mw:"20%",time:"0:50",acc:"Full Size Tray Black",Illus:I.Cookies,
   ing:["½ cup white sugar","¾ cup brown sugar","1 tsp salt","½ cup butter (melted)","1 egg (room temp)","1¼ cup flour","½ tsp baking powder","½ cup dark chocolate chips"],
   steps:["Mix sugars, salt and melted butter. Add egg. Fold in flour, baking powder and chips.","Refrigerate dough 15–20 minutes.","Scoop with small ice cream scoop onto black tray. Do NOT flatten — max 6 at a time.","Cook 220°C · Fan 60% · MW 20% · 50 seconds.","Rest 10–15 minutes before serving."],
   why:"220°C (lower than standard 260°C) allows slower surface colour development, letting the cookie spread before the crust sets. 60% fan creates golden edges without burning the butter-rich dough. Never flatten — the height creates the crispy edge / chewy centre contrast."},
];


const CHAPTERS=[
  {id:"phrase",label:"The Thesis",icon:"✦",part:null},
  {id:"ack",label:"Acknowledgements",icon:"🙏",part:null},
  {id:"preface",label:"Preface",icon:"📝",part:null},
  {id:"intro",label:"Introduction",icon:"🌏",part:null},
  {id:"author",label:"About the Author",icon:"👤",part:null},
  {id:"tech",label:"The Science",icon:"⚗️",part:"Part I — Science"},
  {id:"method",label:"The Method",icon:"🧠",part:"Part II — Method"},
  {id:"prog",label:"The Equipment",icon:"⚙️",part:"Part III — Equipment"},
  {id:"acc",label:"Accessories",icon:"🧺",part:"Part III — Equipment"},
  {id:"sys",label:"The Business",icon:"🏗️",part:"Part IV — Business"},
  {id:"rec",label:"The Recipes",icon:"🍳",part:"Part V — Recipes"},
  {id:"calc",label:"Calculator",icon:"🔢",part:"Appendix"},
];

const TOAST_LEVELS=[
  {name:"Raw",temp:"<100°C",crust:"#f5e0b5",crumb:"#f0d898",science:"No Maillard reaction. Surface moisture has not evaporated. Proteins and sugars completely unreacted.",imp:"Microwave-only mode produces this result — fast internal heating but zero surface browning."},
  {name:"Pale",temp:"100–130°C",crust:"#e8cc88",crumb:"#e8c870",science:"Pre-Maillard drying phase. Surface moisture evaporating. Amino acids and sugars beginning to interact at threshold temperatures.",imp:"Impingement jets begin stripping the boundary layer of moist air — the prerequisite for browning."},
  {name:"Light",temp:"130–150°C",crust:"#d4a84a",crumb:"#d4a030",science:"Maillard onset. First golden hue forming. Nutty and caramel flavour compounds generated. Hundreds of molecules forming.",imp:"High-velocity air (8–15 m/s) drives surface temperature rapidly through this zone."},
  {name:"Golden",temp:"150–165°C",crust:"#b87820",crumb:"#b87018",science:"Peak Maillard efficiency. Optimal flavour complexity. Crust achieves structural integrity and characteristic crisp-tender contrast.",imp:"Combination mode reaches this zone fastest — typically 60–90 seconds total cook time."},
  {name:"Deep",temp:"165–180°C",crust:"#8b5010",crumb:"#8b4808",science:"Caramelisation alongside Maillard. Maximum textural contrast. Deep, rich flavour complexity.",imp:"Precise impingement control maintains even browning across the entire surface without hot spots."},
  {name:"Dark",temp:"180–220°C",crust:"#5a3008",crumb:"#5a2800",science:"Pyrolysis beginning. Bitter notes emerging. Acrylamide compounds starting to form.",imp:"Impingement temperature and velocity control prevents uncontrolled overrun."},
  {name:"Burnt",temp:">220°C",crust:"#2a1405",crumb:"#1a0c02",science:"Full pyrolysis. Carbon char dominates. Food safety concern. Structural integrity lost.",imp:"This is the failure mode — what precision cooking technology is designed to prevent."},
];

const SYSTEMS=[
  {icon:"🔌",name:"Equipment System",sub:"What you own",color:"#5ab870",detail:"Every piece of equipment is a node in an interconnected system. The Merrychef collapses multiple nodes into one — eliminating the cost, complexity, and risk of each displaced unit. One oven. Multiple capabilities. One service contract."},
  {icon:"👨‍🍳",name:"Labour System",sub:"Who operates",color:"#c97c2a",detail:"Traditional kitchens require specialists — a fry cook, a grill cook, a sandwich station. The Merrychef encodes the skill into the profile. Any team member executes it. The result is identical."},
  {icon:"📐",name:"Space System",sub:"Where it lives",color:"#5090c0",detail:"Ventless and countertop. Front of house, satellite kiosk, hotel lobby, mall unit, office pantry. Ventless technology liberates the kitchen from its infrastructure."},
  {icon:"💰",name:"Financial System",sub:"True cost",color:"#c47060",detail:"Equipment cost is only the first payment. The real cost includes installation, ventilation, fire suppression, utility upgrades, maintenance, oil, and compliance. The Merrychef breaks the CAPEX cascade at the first link."},
  {icon:"🛡️",name:"Food Safety System",sub:"HACCP & compliance",color:"#c0c060",detail:"Colour-coded trays, digital cook profile logging, and KitchenConnect cloud monitoring create a documented HACCP trail automatically. Core temperature achievement is designed into the profile — not dependent on staff judgment."},
];

const MODELS={
  base:{label:"conneX12e",mw:800,total:3.0,cavity:12,color:"#8a7d69"},
  sp:{label:"conneX12 SP",mw:1000,total:4.5,cavity:12,color:"#5090c0"},
  hp:{label:"conneX12 HP",mw:2000,total:6.0,cavity:12,color:"#c97c2a"},
  c16:{label:"conneX16",mw:2000,total:6.0,cavity:16,color:"#5ab870"},
};

function convertProfile(baseMW,baseTime,targetKey){
  const t=MODELS[targetKey];
  const watts=(baseMW/100)*800;
  const newMW=baseMW===0?0:Math.min(100,Math.max(5,Math.round((watts/t.mw)*100)));
  const [mm,ss]=baseTime.split(":").map(Number);
  const secs=mm*60+ss;
  const newSecs=targetKey==="c16"&&secs<60?Math.round(secs*1.12):secs;
  const nMM=Math.floor(newSecs/60),nSS=newSecs%60;
  return{mw:newMW,time:`${String(nMM).padStart(2,"0")}:${String(nSS).padStart(2,"0")}`,watts:Math.round(watts)};
}


const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=DM+Mono:wght@400;500&display=swap');
:root{--ink:#0d0c0a;--paper:#f5ede0;--gold:#c97c2a;--text:#f0ead8;--muted:#8a7d69;--dim:#5a5040;--card:#161410;--border:#2a2620;--b2:#1e1c17;--green:#5ab870;--blue:#5090c0;--red:#c47060;}
*{box-sizing:border-box;margin:0;padding:0;}
body{background:var(--ink);color:var(--text);font-family:'DM Sans',sans-serif;}
.book{display:flex;min-height:100vh;}
.sidebar{width:196px;flex-shrink:0;background:#09080700;border-right:1px solid var(--b2);position:fixed;top:0;left:0;bottom:0;z-index:100;display:flex;flex-direction:column;}
.sb-top{padding:26px 18px 18px;border-bottom:1px solid var(--b2);}
.sb-brand{font-family:'Playfair Display',serif;font-size:14px;font-weight:900;color:var(--text);line-height:1.1;}
.sb-brand em{font-style:italic;color:var(--gold);}
.sb-by{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;color:var(--dim);text-transform:uppercase;margin-top:5px;}
.sb-nav{flex:1;overflow-y:auto;padding:10px 0;}
.sb-item{display:flex;align-items:center;gap:9px;padding:9px 18px;cursor:pointer;transition:all .2s;border-left:2px solid transparent;font-size:11px;color:var(--dim);}
.sb-item:hover{color:var(--text);background:#111008;}
.sb-item.on{color:var(--gold);border-left-color:var(--gold);background:#14100a;}
.sb-part{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;text-transform:uppercase;color:#2a2620;padding:12px 18px 3px;}
.sb-icon{font-size:13px;flex-shrink:0;}
.sb-prog{padding:14px 18px;border-top:1px solid var(--b2);}
.prog-bar{height:2px;background:#1e1c17;border-radius:1px;overflow:hidden;}
.prog-fill{height:100%;background:var(--gold);transition:width .3s;}
.prog-txt{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:1px;color:var(--dim);text-transform:uppercase;margin-top:5px;}
.hb{position:fixed;top:14px;left:14px;z-index:200;width:38px;height:38px;background:#09080700;border:1px solid var(--border);border-radius:3px;cursor:pointer;display:none;flex-direction:column;align-items:center;justify-content:center;gap:4px;}
.hbl{width:16px;height:1px;background:var(--muted);}
.main{margin-left:196px;flex:1;}
.pg{display:none;min-height:100vh;}.pg.on{display:block;}
.wrap{max-width:860px;margin:0 auto;padding:60px 36px;}
.ey{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:5px;text-transform:uppercase;color:var(--gold);margin-bottom:12px;}
.cht{font-family:'Playfair Display',serif;font-size:clamp(32px,5vw,60px);font-weight:900;color:var(--text);line-height:.92;margin-bottom:16px;}
.cht em{font-style:italic;color:var(--gold);}
.st{font-family:'Playfair Display',serif;font-size:clamp(18px,3vw,28px);font-weight:700;color:var(--text);margin-bottom:12px;line-height:1.2;}
.body{font-size:13px;line-height:1.85;color:#b5a894;font-weight:300;margin-bottom:10px;}
.div{height:1px;background:linear-gradient(to right,transparent,var(--border),transparent);margin:44px 0;}
.ins{border-left:3px solid var(--gold);padding:14px 18px;background:#141209;margin:20px 0;border-radius:0 4px 4px 0;}
.ins .il{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;margin-bottom:5px;}
.ins p{font-family:'Playfair Display',serif;font-size:13px;line-height:1.7;color:#d5c9b5;font-style:italic;}
.card{background:var(--card);border:1px solid var(--border);border-radius:4px;padding:18px;}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:18px 0;}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0;}
.tag{display:inline-block;font-family:'DM Mono',monospace;font-size:8px;letter-spacing:1px;padding:2px 7px;border-radius:2px;text-transform:uppercase;}
.tg{background:#1a1005;color:var(--gold);border:1px solid #3a2510;}
.tb{background:#0a1220;color:var(--blue);border:1px solid #1a3050;}
.tr{background:#1a0a08;color:var(--red);border:1px solid #3a1515;}
.tn{background:#0a1a10;color:var(--green);border:1px solid #153025;}
.to{background:#1a1a08;color:#a0a060;border:1px solid #2a2a10;}
.btn{padding:10px 24px;background:var(--gold);color:var(--ink);font-family:'DM Mono',monospace;font-size:9px;letter-spacing:3px;text-transform:uppercase;border:none;border-radius:3px;cursor:pointer;transition:all .2s;font-weight:500;}
.btn:hover{background:#e0902a;transform:translateY(-1px);}
.btn-g{background:none;border:1px solid var(--border);color:var(--muted);font-family:'DM Mono',monospace;font-size:8px;letter-spacing:2px;text-transform:uppercase;padding:7px 14px;border-radius:3px;cursor:pointer;transition:all .2s;}
.btn-g:hover{border-color:var(--gold);color:var(--gold);}
.cover-pg{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:60px 28px;background:radial-gradient(ellipse at 50% 30%,#2a1f0f 0%,#0d0c0a 60%);}
.cv-tag{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:6px;color:var(--gold);margin-bottom:22px;text-transform:uppercase;}
.cv h1{font-family:'Playfair Display',serif;font-size:clamp(52px,10vw,112px);font-weight:900;color:var(--text);line-height:.86;margin-bottom:14px;}
.cv h1 em{font-style:italic;color:var(--gold);}
.cv-rule{width:44px;height:1px;background:var(--gold);margin:18px auto;}
.cv-sub{font-family:'Playfair Display',serif;font-size:clamp(13px,2vw,17px);color:var(--muted);font-style:italic;margin-bottom:10px;max-width:400px;}
.cv-by{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:3px;color:var(--dim);text-transform:uppercase;}
.cv-stats{display:flex;gap:32px;justify-content:center;margin:36px 0;flex-wrap:wrap;}
.cst-n{font-family:'Playfair Display',serif;font-size:30px;font-weight:900;color:var(--gold);line-height:1;}
.cst-l{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;color:var(--dim);text-transform:uppercase;margin-top:2px;}
.disc{max-width:500px;margin:28px auto 0;padding:16px 20px;background:#111008;border:1px solid var(--border);border-radius:4px;text-align:left;}
.disc-l{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:3px;color:var(--dim);text-transform:uppercase;margin-bottom:7px;}
.disc-t{font-size:10px;color:var(--dim);line-height:1.7;}
.ttabs{display:flex;gap:5px;flex-wrap:wrap;margin:18px 0;}
.tt{padding:6px 14px;background:var(--card);border:1px solid var(--border);border-radius:18px;font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;text-transform:uppercase;color:var(--dim);cursor:pointer;transition:all .2s;}
.tt:hover,.tt.on{background:#1a1205;border-color:var(--gold);color:var(--gold);}
.tp{display:none;animation:fi .3s ease;}.tp.on{display:block;}
@keyframes fi{from{opacity:0;transform:translateY(-4px);}to{opacity:1;transform:translateY(0);}}
.myth{background:#1a0f05;border:1px solid #3a2010;border-radius:4px;padding:18px 72px 18px 18px;margin:12px 0;position:relative;}
.myth::after{content:'✕ MYTH';position:absolute;top:10px;right:12px;font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;color:#8a3020;border:1px solid #3a1510;padding:2px 7px;border-radius:2px;}
.fact{background:#051a0f;border:1px solid #103a20;border-radius:4px;padding:18px;margin:12px 0;position:relative;}
.fact::after{content:'✓ FACT';position:absolute;top:10px;right:12px;font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;color:#2a8a50;border:1px solid #104a25;padding:2px 7px;border-radius:2px;}
.mol-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0;}
.mol{background:var(--card);border:1px solid var(--border);border-radius:4px;padding:16px;text-align:center;transition:all .3s;}
.mol:hover{border-color:var(--gold);}
.mol-ic{font-size:26px;margin-bottom:7px;}
.mol-nm{font-family:'Playfair Display',serif;font-size:13px;font-weight:700;color:var(--text);margin-bottom:2px;}
.mol-sb{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;color:var(--gold);margin-bottom:6px;text-transform:uppercase;}
.mol-de{font-size:10px;color:var(--muted);line-height:1.5;}
.ob{background:linear-gradient(135deg,#0a1220,#0d0c0a);border:1px solid #1a3050;border-radius:4px;padding:16px;margin:16px 0;display:flex;gap:12px;align-items:flex-start;}
.ob-l{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:3px;color:#5090c0;text-transform:uppercase;margin-bottom:5px;}
.ob-t{font-size:11px;color:#9ab0c8;line-height:1.6;font-style:italic;}
.toast-row{display:flex;gap:5px;margin:16px 0;align-items:flex-end;}
.t-it{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;transition:transform .2s;}
.t-it:hover{transform:translateY(-3px);}
.t-sl{width:100%;aspect-ratio:.72;border-radius:3px;border:1px solid var(--border);}
.t-nm{font-family:'DM Mono',monospace;font-size:6px;color:var(--muted);letter-spacing:1px;text-align:center;text-transform:uppercase;}
.t-tp{font-size:7px;color:var(--gold);text-align:center;}
.t-pop{background:#1c1a15;border:1px solid var(--gold);border-radius:4px;padding:12px;margin-top:8px;font-size:11px;color:#b5a894;line-height:1.6;}
.ov{background:#0a1520;border:1px solid #1a3050;border-radius:4px;padding:14px;}
.ov-row{display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid #0f2030;font-family:'DM Mono',monospace;}
.ov-row:last-child{border-bottom:none;}
.ov-ic{color:#4a8aba;font-size:12px;}
.ov-l{color:#4a7090;letter-spacing:1px;font-size:8px;text-transform:uppercase;}
.ov-v{color:#c0e0ff;font-size:12px;letter-spacing:1px;}
.sl-g{margin-bottom:14px;}
.sl-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;}
.sl-n{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);}
.sl-v{font-family:'DM Mono',monospace;font-size:11px;font-weight:500;}
input[type=range]{width:100%;height:2px;border-radius:1px;outline:none;cursor:pointer;-webkit-appearance:none;background:linear-gradient(to right,var(--c) 0%,var(--c) var(--p),#2a2620 var(--p),#2a2620 100%);}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:11px;height:11px;border-radius:50%;background:var(--c);cursor:pointer;}
.ref-t{width:100%;border-collapse:collapse;font-size:11px;margin:16px 0;}
.ref-t th{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);padding:8px 10px;text-align:left;border-bottom:1px solid var(--border);}
.ref-t td{padding:8px 10px;border-bottom:1px solid #111008;color:#b5a894;vertical-align:middle;}
.ref-t tr:hover td{background:#111008;}
.r-srch{width:100%;background:var(--card);border:1px solid var(--border);border-radius:4px;padding:10px 14px;color:var(--text);font-family:'DM Sans',sans-serif;font-size:12px;outline:none;margin-bottom:12px;transition:border-color .2s;}
.r-srch:focus{border-color:var(--gold);}
.r-srch::placeholder{color:var(--dim);}
.cats{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:18px;}
.cp{padding:5px 12px;background:var(--card);border:1px solid var(--border);border-radius:14px;font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;text-transform:uppercase;color:var(--dim);cursor:pointer;transition:all .2s;}
.cp:hover,.cp.on{background:#1a1205;border-color:var(--gold);color:var(--gold);}
.r-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
.rcard{background:var(--card);border:1px solid var(--border);border-radius:4px;overflow:hidden;cursor:pointer;transition:all .3s;}
.rcard:hover{border-color:var(--gold);transform:translateY(-2px);}
.rc-ill{width:100%;aspect-ratio:4/3;background:linear-gradient(135deg,#1e1810,#2a2010);display:flex;align-items:center;justify-content:center;padding:10px;}
.rc-ill svg{width:100%;height:100%;}
.rc-body{padding:10px;}
.rc-cat{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:2px;}
.rc-nm{font-family:'Playfair Display',serif;font-size:13px;font-weight:700;color:var(--text);margin-bottom:2px;line-height:1.2;}
.rc-desc{font-size:9px;color:var(--muted);margin-bottom:7px;}
.rc-s{display:flex;gap:4px;flex-wrap:wrap;}
.rs{font-family:'DM Mono',monospace;font-size:7px;padding:2px 5px;border-radius:2px;}
.rs-t{background:#1a0a05;color:#e06030;border:1px solid #3a1510;}
.rs-f{background:#1a1005;color:var(--gold);border:1px solid #3a2510;}
.rs-m{background:#0a1220;color:var(--blue);border:1px solid #1a3050;}
.rs-i{background:#0a1a10;color:var(--green);border:1px solid #153025;}
.rd-hero{position:relative;height:260px;overflow:hidden;background:linear-gradient(135deg,#2a1f0f,#1a1408);display:flex;align-items:center;justify-content:center;}
.rd-hero svg{width:100%;height:100%;max-width:420px;}
.rd-ov{position:absolute;bottom:0;left:0;right:0;padding:24px 28px;background:linear-gradient(to top,#0d0c0a,transparent);}
.rd-cat{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;margin-bottom:5px;}
.rd-nm{font-family:'Playfair Display',serif;font-size:clamp(20px,4vw,36px);font-weight:900;color:var(--text);line-height:1.05;margin-bottom:3px;}
.rd-tg{font-size:12px;color:var(--muted);font-style:italic;}
.sbar{display:flex;border-bottom:1px solid var(--b2);overflow-x:auto;}
.sb-bl{flex:1;min-width:90px;padding:14px 16px;border-right:1px solid var(--b2);text-align:center;}
.sb-bl:last-child{border-right:none;}
.sb-ic{font-size:14px;margin-bottom:3px;}
.sb-vl{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;line-height:1;margin-bottom:2px;}
.sb-lb{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;color:var(--dim);text-transform:uppercase;}
.sb-su{font-size:8px;color:var(--muted);margin-top:1px;}
.rd-body{display:grid;grid-template-columns:1fr 1.4fr;gap:24px;padding:24px 28px;}
.rd-se{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;margin-bottom:8px;}
.ing-l li{font-size:11px;color:#b5a894;padding:4px 0;border-bottom:1px solid #1a1814;list-style:none;line-height:1.5;}
.ing-l li::before{content:'—';color:#3a2e1e;margin-right:7px;}
.st-it{display:flex;gap:9px;margin-bottom:8px;}
.st-n{font-family:'DM Mono',monospace;font-size:9px;color:var(--gold);flex-shrink:0;width:18px;padding-top:2px;}
.st-t{font-size:11px;color:#b5a894;line-height:1.6;}
.why{background:#141209;border-left:2px solid var(--gold);padding:12px 16px;margin-top:16px;border-radius:0 4px 4px 0;grid-column:1/-1;}
.why-l{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:4px;}
.why-t{font-size:11px;color:#b5a894;line-height:1.7;font-style:italic;}
.sys-nodes{display:grid;grid-template-columns:repeat(5,1fr);gap:7px;margin:18px 0;}
.sn{background:#111008;border:1px solid var(--nc);border-radius:4px;padding:10px 6px;text-align:center;cursor:pointer;transition:all .25s;}
.sn:hover,.sn.on{background:#1a1814;transform:translateY(-2px);}
.sn-ic{font-size:20px;margin-bottom:5px;}
.sn-nm{font-size:9px;color:var(--text);font-weight:500;margin-bottom:2px;line-height:1.2;}
.sn-sb{font-family:'DM Mono',monospace;font-size:7px;color:var(--nc);letter-spacing:1px;text-transform:uppercase;}
.calc-grid{display:grid;grid-template-columns:340px 1fr;gap:0;min-height:65vh;}
.calc-sb{border-right:1px solid var(--b2);padding:22px;}
.calc-out{padding:22px;}
.res-card{background:#0f0e0b;border:2px solid var(--rc);border-radius:4px;margin-bottom:10px;overflow:hidden;}
.res-hd{padding:10px 14px;border-bottom:1px solid #1a1814;display:flex;align-items:center;justify-content:space-between;}
.res-md{font-family:'Playfair Display',serif;font-size:14px;font-weight:700;color:var(--text);}
.res-bd{font-family:'DM Mono',monospace;font-size:7px;letter-spacing:2px;padding:2px 7px;border-radius:2px;color:var(--rc);border:1px solid var(--rc);}
.res-sub{font-size:9px;color:var(--dim);margin-top:2px;}
.res-body{padding:10px 14px;}
.res-row{display:flex;align-items:center;justify-content:space-between;padding:5px 0;border-bottom:1px solid #111008;}
.res-row:last-child{border-bottom:none;}
.res-lb{display:flex;align-items:center;gap:5px;font-family:'DM Mono',monospace;font-size:7px;letter-spacing:1px;color:var(--dim);text-transform:uppercase;}
.res-vl{font-family:'DM Mono',monospace;font-size:12px;font-weight:500;}
.res-old{font-family:'DM Mono',monospace;font-size:8px;color:#3a3020;text-decoration:line-through;margin-right:5px;}
.wt{font-family:'DM Mono',monospace;font-size:8px;letter-spacing:1px;padding:2px 7px;border-radius:2px;background:#0a1a10;color:var(--green);border:1px solid #153025;margin-top:6px;display:inline-block;}
@media(max-width:900px){
  .sidebar{transform:translateX(-196px);}.sidebar.open{transform:translateX(0);}
  .main{margin-left:0!important;}.hb{display:flex;}
  .r-grid{grid-template-columns:1fr 1fr;}.rd-body{grid-template-columns:1fr;padding:18px;}
  .calc-grid{grid-template-columns:1fr;}.sys-nodes{grid-template-columns:repeat(3,1fr);}
  .mol-grid,.g2,.g3{grid-template-columns:1fr;}.wrap{padding:44px 18px;}
}
@media(max-width:540px){.r-grid{grid-template-columns:1fr;}.cv h1{font-size:48px;}.sbar{flex-wrap:wrap;}.sb-bl{min-width:50%;}}
`;


export default function WokThinking() {
  const [ch, setCh] = useState("cover");
  const [sbOpen, setSbOpen] = useState(false);
  const [techTab, setTechTab] = useState("myths");
  const [methodTab, setMethodTab] = useState("sys");
  const [toastSel, setToastSel] = useState(null);
  const [sysSel, setSysSel] = useState(null);
  const [cat, setCat] = useState("All");
  const [srch, setSrch] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [pTemp, setPTemp] = useState(260);
  const [pFan, setPFan] = useState(80);
  const [pMW, setPMW] = useState(60);
  const [pTime, setPTime] = useState(90);
  const [cTemp, setCTemp] = useState(260);
  const [cFan, setCFan] = useState(80);
  const [cMW, setCMW] = useState(60);
  const [cTM, setCTM] = useState("01");
  const [cTS, setCTS] = useState("00");

  const chIdx = CHAPTERS.findIndex(c=>c.id===ch);
  const prog = Math.round((chIdx/(CHAPTERS.length-1))*100);
  const CATS = ["All",...new Set(RECIPES.map(r=>r.cat))];
  const visible = RECIPES.filter(r=>(cat==="All"||r.cat===cat)&&(srch===""||r.name.toLowerCase().includes(srch.toLowerCase())));
  const baseTime = `${String(cTM).padStart(2,"0")}:${String(cTS).padStart(2,"0")}`;
  const nav = (id) => { setCh(id); setSbOpen(false); setRecipe(null); };

  const advice = () => {
    const a=[];
    if(pMW===0) return [{t:"ok",m:"Pure impingement. Settings identical across all models. Ideal for bread, pastry, crackling."}];
    if(pMW>75) a.push({t:"warn",m:`MW at ${pMW}% — avoid dairy products above 75%. Cheese will break and become oily.`});
    if(pFan===100&&pTime>60) a.push({t:"warn",m:"100% fan for >60s — monitor surface colour. Reduce fan 10–15% if browning too fast."});
    if(pFan<20) a.push({t:"info",m:"Low fan — minimal browning. Right for liquid products, containers, steam-based cooking."});
    if(pMW>80&&pFan>80) a.push({t:"info",m:"High MW + high fan — aggressive profile. Shorten time or reduce one parameter."});
    if(a.length===0) a.push({t:"ok",m:"Balanced profile — suitable for most proteins, pastries, and reheating applications."});
    return a;
  };

  return (
    <>
      <style>{CSS}</style>
      <button className="hb" onClick={()=>setSbOpen(o=>!o)}>
        <div className="hbl"/><div className="hbl"/><div className="hbl"/>
      </button>
      <aside className={`sidebar${sbOpen?" open":""}`} style={{background:"#0a0908"}}>
        <div className="sb-top">
          <div className="sb-brand">Wok<br/><em>Thinking</em></div>
          <div className="sb-by">Jimmy Mun · 2026</div>
        </div>
        <nav className="sb-nav">
          {CHAPTERS.map((c,i)=>{
            const prev=i>0?CHAPTERS[i-1].part:null;
            return <div key={c.id}>
              {c.part&&c.part!==prev&&<div className="sb-part">{c.part}</div>}
              <div className={`sb-item${ch===c.id?" on":""}`} onClick={()=>nav(c.id)}>
                <span className="sb-icon">{c.icon}</span>{c.label}
              </div>
            </div>;
          })}
        </nav>
        <div className="sb-prog">
          <div className="prog-bar"><div className="prog-fill" style={{width:`${prog}%`}}/></div>
          <div className="prog-txt">Ch {chIdx+1} of {CHAPTERS.length}</div>
        </div>
      </aside>

      <main className="main" style={{marginLeft:sbOpen?"0":"196px"}}>

        <div className={`pg${ch==="cover"?" on":""}`}>
          <div className="cover-pg cv">
            <div className="cv-tag">A Culinary Intelligence Guide</div>
            <h1>Wok<br/><em>Thinking</em></h1>
            <div className="cv-rule"/>
            <div className="cv-sub">APAC Kitchen Science, Systems Design and High-Speed Cooking</div>
            <div className="cv-by">By Jimmy Mun · 2026</div>
            <div className="cv-stats">
              {[["22","APAC Recipes"],["4","Frameworks"],["15","Markets"],["Original","Science"]].map(([n,l])=>(
                <div key={l}><div className="cst-n">{n}</div><div className="cst-l">{l}</div></div>
              ))}
            </div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"13px",color:"#8a7d69",fontStyle:"italic",maxWidth:"420px",margin:"18px auto",lineHeight:"1.8",padding:"0 10px"}}>
              "Seeing is believing.<br/>Seeing is not enough.<br/>We must model it."
            </div>
            <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",letterSpacing:"2px",color:"#3a3020",textTransform:"uppercase",marginBottom:"22px"}}>— Daniel Theyagu</div>
            <button className="btn" onClick={()=>nav("phrase")}>Begin Reading →</button>
            <div className="disc">
              <div className="disc-l">Publisher's Notice</div>
              <p className="disc-t">An independent publication by Jimmy Mun in a personal capacity. Not affiliated with, sponsored by, or produced on behalf of any equipment manufacturer or employer. Original culinary findings including steam cavity microwave interference (Ref: JMUN-IP-001-2026) are the intellectual property of the author. All prices, costs and financial figures appearing in this publication are indicative estimates only and subject to change. © 2026 Jimmy Mun. All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* PHRASE PAGE */}
        <div className={`pg${ch==="phrase"?" on":""}`}>
          <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"60px 28px",background:"radial-gradient(ellipse at 50% 40%,#1a1408 0%,#0d0c0a 70%)"}}>
            <div style={{fontFamily:"DM Mono,monospace",fontSize:"8px",letterSpacing:"5px",color:"#3a3020",textTransform:"uppercase",marginBottom:"48px"}}>The Thesis</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,38px)",fontWeight:"400",color:"#8a7d69",fontStyle:"italic",lineHeight:"1.9",marginBottom:"8px"}}>Seeing is believing.</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,38px)",fontWeight:"400",color:"#b5a894",fontStyle:"italic",lineHeight:"1.9",marginBottom:"8px"}}>Seeing is not enough.</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,38px)",fontWeight:"900",color:"#f0ead8",fontStyle:"italic",lineHeight:"1.9",marginBottom:"40px"}}>We must model it.</div>
            <div style={{width:"32px",height:"1px",background:"#c97c2a",margin:"0 auto 18px"}}/>
            <div style={{fontFamily:"DM Mono,monospace",fontSize:"9px",letterSpacing:"3px",color:"#c97c2a",textTransform:"uppercase",marginBottom:"4px"}}>Daniel Theyagu</div>
            <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",letterSpacing:"2px",color:"#3a3020",textTransform:"uppercase"}}>Mentor — Agile · Systems · Design · Creative Thinking</div>
            <div style={{marginTop:"60px"}}>
              <button className="btn" onClick={()=>nav("ack")}>Continue →</button>
            </div>
          </div>
        </div>

        {/* ACKNOWLEDGEMENTS */}
        <div className={`pg${ch==="ack"?" on":""}`}>
          <div className="wrap">
            <div className="ey">Acknowledgements</div>
            <h1 className="cht">On the <em>Shoulders</em><br/>of Others.</h1>
            <p className="body">No serious work is built alone. This book stands on the thinking, teaching and generosity of people who gave their knowledge freely and trusted me to carry it forward.</p>
            <div className="div"/>
            {[
              {name:"Daniel Theyagu",role:"Mentor — Agile Methodology, Systems Thinking, Design Thinking & Creative Thinking",note:"The phrase that anchors this entire book — 'Seeing is believing. Seeing is not enough. We must model it.' — came from a conversation with Daniel that changed how I see everything. His teaching gave me the framework to understand what I had been practising intuitively for years. The intellectual architecture of Part II of this book is built on his foundation."},
              {name:"The Kitchens of APAC",role:"15 markets · Countless demonstrations · Every operator who asked why",note:"To every chef who let me into their kitchen, every operator who pushed back on a profile setting, every student who asked a question I couldn't immediately answer — you shaped this book more than any textbook could."},
              {name:"The Food Scientists",role:"Louis Camille Maillard · Harold McGee · The tradition of culinary science",note:"Standing on the shoulders of those who took food seriously as a scientific subject, long before it was fashionable to do so."},
            ].map(p=>(
              <div key={p.name} style={{padding:"20px 0",borderBottom:"1px solid var(--b2)"}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:"16px",fontWeight:"700",color:"var(--text)",marginBottom:"3px"}}>{p.name}</div>
                <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",marginBottom:"10px"}}>{p.role}</div>
                <p style={{fontSize:"12px",color:"#b5a894",lineHeight:"1.7",fontStyle:"italic"}}>"{p.note}"</p>
              </div>
            ))}
            <div style={{textAlign:"center",marginTop:"36px"}}><button className="btn" onClick={()=>nav("preface")}>Continue to Preface →</button></div>
          </div>
        </div>

        {/* PREFACE */}
        <div className={`pg${ch==="preface"?" on":""}`}>
          <div className="wrap">
            <div className="ey">Preface</div>
            <h1 className="cht">From Demo<br/>to <em>Model.</em></h1>
            <p className="body">For years my job was to make food in front of people. Walk into a kitchen, set up a machine, cook something in under two minutes that should have taken twenty, and watch the room shift from sceptical to curious. It worked. People believed it when they saw it.</p>
            <p className="body">But seeing was never enough — not for me, and eventually not for the operators I was trying to help. They could watch the demo. They could taste the result. And then they'd go back to their kitchens and the knowledge would stop there, because nobody had given them the model behind what they saw.</p>
            <p className="body">That gap — between observation and understanding — is what this book exists to close.</p>
            <div className="ins">
              <div className="il">The Moment It Changed</div>
              <p>"I was sitting in a session with Daniel Theyagu when he said it: 'Seeing is believing. Seeing is not enough. We must model it.' I had been running food demonstrations across fifteen APAC markets for years. I had seen every version of the seeing-is-believing moment — the raised eyebrow, the surprised bite, the pulled-out phone. But I had never heard anyone name what was missing on the other side of that moment. Daniel named it. You must model it."</p>
            </div>
            <p className="body">This book is built around that principle. Every recipe is a model — not just a method. Every profile setting has a physics reason. Every business decision exists inside a system with upstream causes and downstream consequences. Every creative choice can be structured, prototyped and tested.</p>
            <p className="body">I started in professional kitchens. I moved into commercial equipment — fifteen APAC markets, major QSR chains, c-stores, hotel groups, culinary schools. I sat at the intersection of the kitchen and the boardroom for long enough to see that the same problems kept recurring, in Singapore and in Sydney, in Manila and in Kuala Lumpur, because the people making the decisions were only seeing. Nobody had given them the model.</p>
            <p className="body">This is the model. Or at least, the beginning of one.</p>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"13px",fontStyle:"italic",color:"var(--muted)",textAlign:"right",marginTop:"24px"}}>— Jimmy Mun, Singapore, 2026</div>
            <div style={{textAlign:"center",marginTop:"36px"}}><button className="btn" onClick={()=>nav("intro")}>Continue to Introduction →</button></div>
          </div>
        </div>

        {/* INTRODUCTION */}
        <div className={`pg${ch==="intro"?" on":""}`}>
          <div className="wrap">
            <div className="ey">Introduction</div>
            <h1 className="cht">Why APAC Needs a<br/><em>Different</em> Kind of<br/>Kitchen Thinking.</h1>
            <p className="body">The cookbooks available to APAC culinary students today were mostly written in the West, rooted in French classical technique, designed for kitchens built on infrastructure that much of Asia doesn't have and doesn't need.</p>
            <p className="body">The business books available to APAC food entrepreneurs treat the kitchen as a black box — inputs and outputs, cost and margin, but nothing about what happens in between and why it matters.</p>
            <p className="body">The equipment manuals tell you what buttons to press. They do not tell you why those buttons work, what happens at the molecular level when you press them, or how the decision to press them connects to every other decision in your operation.</p>
            <div className="div"/>
            <h2 className="st">How This Book Is Structured</h2>
            {[
              {part:"Part I — The Science",desc:"The physics and chemistry of high-speed cooking. Not simplified. Not dumbed down. Explained the way a chef thinks about it — through analogy, consequence and application."},
              {part:"Part II — The Method",desc:"Four thinking frameworks applied to the kitchen: Systems Thinking, Design Thinking, Creative Thinking and Agile Methodology. The tools that transform observation into understanding. Seeing into modelling."},
              {part:"Part III — The Equipment",desc:"Four controls. Infinite results. How to programme, how to read a profile, and which accessories change what's possible."},
              {part:"Part IV — The Business",desc:"The five kitchen systems. The CAPEX cascade. The real cost of every equipment decision."},
              {part:"Part V — The Recipes",desc:"22 APAC recipes. Each one is a worked example — not just ingredients and method, but the model behind why every profile setting was chosen."},
              {part:"Appendix — The Calculator",desc:"Cross-model profile conversion. Because the model should be portable across every version of the equipment."},
            ].map(s=>(
              <div key={s.part} style={{display:"flex",gap:"14px",padding:"12px 0",borderBottom:"1px solid var(--b2)"}}>
                <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",letterSpacing:"1px",color:"var(--gold)",width:"130px",flexShrink:0,paddingTop:"2px",textTransform:"uppercase",lineHeight:"1.5"}}>{s.part}</div>
                <div style={{fontSize:"12px",color:"#b5a894",lineHeight:"1.7"}}>{s.desc}</div>
              </div>
            ))}
            <div className="ins" style={{marginTop:"28px"}}>
              <div className="il">How to Read This Book</div>
              <p>"You do not have to read this book in order. If you are a practitioner, start with the recipes and work backwards into the science. If you are a student, start with Part I and let the recipes become your worked examples. If you are an operator or entrepreneur, start with Part IV and let the rest inform your decisions. The model holds regardless of where you enter it."</p>
            </div>
            <div style={{textAlign:"center",marginTop:"36px"}}><button className="btn" onClick={()=>nav("tech")}>Begin Part I — The Science →</button></div>
          </div>
        </div>

        {/* COVER - kept for direct navigation */}
        <div className={`pg${ch==="cover"?" on":""}`}>
          <div className="cover-pg cv">
            <div className="cv-tag">A Culinary Intelligence Guide</div>
            <h1>Wok<br/><em>Thinking</em></h1>
            <div className="cv-rule"/>
            <div className="cv-sub">APAC Kitchen Science, Systems Design and High-Speed Cooking</div>
            <div className="cv-by">By Jimmy Mun · 2026</div>
            <div className="cv-stats">
              {[["22","APAC Recipes"],["4","Frameworks"],["15","Markets"],["Original","Science"]].map(([n,l])=>(
                <div key={l}><div className="cst-n">{n}</div><div className="cst-l">{l}</div></div>
              ))}
            </div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"13px",color:"#8a7d69",fontStyle:"italic",maxWidth:"420px",margin:"18px auto",lineHeight:"1.8"}}>
              "Seeing is believing. Seeing is not enough.<br/>We must model it."
            </div>
            <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",letterSpacing:"2px",color:"#3a3020",textTransform:"uppercase",marginBottom:"22px"}}>— Daniel Theyagu</div>
            <button className="btn" onClick={()=>nav("phrase")}>Begin Reading →</button>
          </div>
        </div>

        {/* METHOD PAGE */}
        <div className={`pg${ch==="method"?" on":""}`}>
          <div className="wrap">
            <div className="ey">Part II — The Method</div>
            <h1 className="cht">Four Frameworks.<br/><em>One Kitchen.</em></h1>
            <p className="body">These are the thinking tools that transform observation into understanding. Not theory for its own sake — each framework is applied directly to food, kitchens and commercial operations.</p>
            <div className="ttabs">
              {[["sys","Systems Thinking"],["dt","Design Thinking"],["ct","Creative Thinking"],["ag","Agile Methodology"]].map(([id,lb])=>(
                <div key={id} className={`tt${methodTab===id?" on":""}`} onClick={()=>setMethodTab(id)}>{lb}</div>
              ))}
            </div>

            {/* SYSTEMS THINKING */}
            <div className={`tp${methodTab==="sys"?" on":""}`}>
              <div className="ins"><div className="il">The Iceberg Model</div><p>"Most operators respond only to what is visible — the event at the surface. The iceberg model reveals that beneath every event is a pattern, beneath every pattern is a structure, and beneath every structure is a mental model. To change results, you must work at the level of mental models — not events."</p></div>
              <div style={{margin:"18px 0"}}>
                {[
                  {lv:"Events",icon:"🌊",col:"#5090c0",pct:"10%",desc:"What you react to daily. A chef quits. A dish gets a bad review. Food cost spikes. A customer complains. These feel urgent. They are symptoms, not causes.",ex:"Example: Inconsistent burger quality across three outlets this week."},
                  {lv:"Patterns & Trends",icon:"📈",col:"#c97c2a",pct:"25%",desc:"When you zoom out across time. Labour turnover every 8–14 months. Menu complexity creeping upward each quarter. Consistent complaints about the same dish. Patterns repeat because the structure beneath them hasn't changed.",ex:"Example: Quality drops every time a new staff member is onboarded."},
                  {lv:"Systemic Structures",icon:"⚙️",col:"#5ab870",pct:"50%",desc:"The systems and relationships creating those patterns. Kitchen design locked to equipment. Training built around people, not profiles. Pricing models that ignore labour and energy. These structures persist until someone redesigns them.",ex:"Example: No standardised cook profile means every staff member cooks differently."},
                  {lv:"Mental Models",icon:"🧠",col:"#c47060",pct:"90%",desc:"The beliefs and assumptions at the deepest level. 'Real cooking takes time.' 'Equipment is a cost, not a capability.' 'Customers can't tell the difference.' These are invisible — until someone names them.",ex:"Example: 'We've always done it this way' is a mental model, not a fact."},
                ].map((item,i)=>(
                  <div key={item.lv} style={{display:"flex",gap:"12px",marginBottom:"8px",alignItems:"flex-start"}}>
                    <div style={{width:"3px",background:item.col,flexShrink:0,alignSelf:"stretch",borderRadius:"2px",opacity:0.8-i*0.1}}/>
                    <div style={{flex:1,background:"var(--card)",border:`1px solid var(--border)`,borderLeft:`2px solid ${item.col}`,borderRadius:"0 4px 4px 0",padding:"12px 14px"}}>
                      <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"5px"}}>
                        <span style={{fontSize:"16px"}}>{item.icon}</span>
                        <span style={{fontFamily:"Playfair Display,serif",fontSize:"13px",fontWeight:"700",color:"var(--text)"}}>{item.lv}</span>
                        <span style={{fontFamily:"DM Mono,monospace",fontSize:"7px",color:item.col,letterSpacing:"1px",padding:"1px 6px",border:`1px solid ${item.col}`,borderRadius:"2px"}}>VISIBLE {item.pct}</span>
                      </div>
                      <p style={{fontSize:"11px",color:"#b5a894",lineHeight:"1.6",marginBottom:"6px"}}>{item.desc}</p>
                      <p style={{fontSize:"10px",color:item.col,fontStyle:"italic"}}>{item.ex}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="div"/>
              <h2 className="st" style={{fontSize:"18px"}}>Wicked Problems in F&B</h2>
              <p className="body">Wicked problems have no clean solution — every fix creates a new problem, and consequences only emerge after you've committed.</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",margin:"14px 0"}}>
                {[
                  {t:"The Labour Paradox",d:"Automate to solve the staff shortage. But automation removes the craft argument that justifies your price point. The people who remain feel deskilled and leave faster.",c:"#c47060"},
                  {t:"Speed vs Authenticity",d:"Customers want faster service and authentic handcrafted food simultaneously. The moment they see a speed oven, 'authentic' disappears — even if the food is objectively better.",c:"#c97c2a"},
                  {t:"Menu as Identity",d:"Every chef puts dishes on for a reason. Every operator should cut 40% of the menu. These two needs directly contradict — and cutting the menu may save the business but cost you the chef who made it worth saving.",c:"#5090c0"},
                  {t:"The Middle Collapse",d:"Post-pandemic F&B has split into pure delivery economics and pure experience dining. The casual dining middle ground is being hollowed out. Most operators are sitting in it.",c:"#5ab870"},
                  {t:"Sustainability Paradox",d:"Precision cooking reduces food waste. But HACCP compliance often demands disposal of food that is actually safe. The science has moved. The law hasn't.",c:"#c0c060"},
                ].map(w=>(
                  <div key={w.t} style={{background:"var(--card)",border:`1px solid var(--border)`,borderTop:`2px solid ${w.c}`,borderRadius:"4px",padding:"12px"}}>
                    <div style={{fontFamily:"Playfair Display,serif",fontSize:"12px",fontWeight:"700",color:"var(--text)",marginBottom:"5px"}}>{w.t}</div>
                    <p style={{fontSize:"10px",color:"var(--muted)",lineHeight:"1.5"}}>{w.d}</p>
                  </div>
                ))}
              </div>
              <div className="div"/>
              <h2 className="st" style={{fontSize:"18px"}}>Mental Models for Kitchen Leaders</h2>
              <div style={{margin:"14px 0"}}>
                {[
                  {nm:"First Principles",ic:"🔬",desc:"What is cooking actually doing? Applying controlled energy to trigger desired chemical and physical transformations in food. That's it. Every piece of equipment is just a different method of delivering that energy. When you see it this way, you stop defending equipment and start asking: what's the most precise way to deliver the right energy, to the right place, at the right time?"},
                  {nm:"Inversion",ic:"🔄",desc:"Don't ask 'how do I build a great kitchen?' Ask 'what would guarantee my kitchen fails?' — inconsistent quality, long training cycles, high energy cost, staff-dependent execution, no data on what's working. Now invert every answer. You've just described what this system solves."},
                  {nm:"Second-Order Thinking",ic:"🎯",desc:"First order: high-speed oven = faster service. Second order: faster service = more table turns = higher revenue per seat. Third order: when everyone adopts speed cooking, speed is no longer a differentiator — only the quality of what comes out matters. The question becomes: what is your culinary IP?"},
                  {nm:"The Map Is Not the Territory",ic:"🗺️",desc:"A recipe is not a dish. A profile setting is not a food result. This book gives you the map. The territory is your specific ingredients, your altitude, your water hardness, your cold chain, your service window. Every operator must test and calibrate. The book is a departure point, not an arrival."},
                ].map(m=>(
                  <div key={m.nm} style={{background:"var(--card)",border:"1px solid var(--border)",borderRadius:"4px",padding:"14px",marginBottom:"8px",display:"flex",gap:"12px"}}>
                    <div style={{fontSize:"22px",flexShrink:0}}>{m.ic}</div>
                    <div><div style={{fontFamily:"Playfair Display,serif",fontSize:"13px",fontWeight:"700",color:"var(--text)",marginBottom:"4px"}}>{m.nm}</div><p style={{fontSize:"11px",color:"#b5a894",lineHeight:"1.6"}}>{m.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>

            {/* DESIGN THINKING */}
            <div className={`tp${methodTab==="dt"?" on":""}`}>
              <div className="ins"><div className="il">Design Thinking in the Kitchen</div><p>"Most recipe development starts with the dish. Design Thinking starts with the person — the operator making it, the customer eating it, and the system they both exist within. It turns a recipe from a method into a solution."</p></div>
              <div style={{margin:"18px 0"}}>
                {[
                  {ph:"01 Empathise",ic:"👂",col:"#5090c0",q:"Who are we actually cooking for?",desc:"Before developing any recipe or menu, understand the real context. Who is the operator? What are their constraints — kitchen size, staff skill, equipment, service speed? Who is the customer? What do they actually need vs what they say they want?",tools:["Operator shadowing","Customer journey mapping","Service time observation","Waste pattern analysis"]},
                  {ph:"02 Define",ic:"🎯",col:"#c97c2a",q:"What problem is this recipe solving?",desc:"Translate your observations into a clear problem statement. Not 'we need a new chicken dish' but 'operators need a consistent, high-margin protein that any skill level can execute in under 90 seconds during peak service.'",tools:["Problem statement framing","User needs mapping","Constraint listing","Success criteria definition"]},
                  {ph:"03 Ideate",ic:"💡",col:"#5ab870",q:"What are all the possible solutions?",desc:"Generate options without judgment first. What if we changed the cooking method? The protein? The flavour profile? The accessory? The portion size? Quantity of ideas matters at this stage. Judgment comes later.",tools:["SCAMPER (see Creative Thinking tab)","Cross-cultural flavour mapping","Profile variation testing","Ingredient substitution lists"]},
                  {ph:"04 Prototype",ic:"🧪",col:"#c0c060",q:"What is the minimum viable recipe?",desc:"Build the simplest version that tests your core idea. Not the finished dish — the earliest version that answers your key question. A prototype recipe uses available ingredients, existing profiles and the least amount of development time.",tools:["MVP recipe format","Profile variation A/B test","Blind tasting protocol","Time-and-motion trial"]},
                  {ph:"05 Test",ic:"📊",col:"#c47060",q:"Does it actually solve the problem?",desc:"Test with the real operator in their real kitchen under real conditions. Not a controlled demo environment. Real time pressure, real ingredients, real staff. Then iterate. Design Thinking is a loop, not a line.",tools:["Operator field testing","Blind customer tasting","Food cost validation","Service speed measurement"]},
                ].map(p=>(
                  <div key={p.ph} style={{background:"var(--card)",border:`1px solid var(--border)`,borderLeft:`3px solid ${p.col}`,borderRadius:"0 4px 4px 0",padding:"14px",marginBottom:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px",flexWrap:"wrap"}}>
                      <span style={{fontSize:"18px"}}>{p.ic}</span>
                      <span style={{fontFamily:"DM Mono,monospace",fontSize:"8px",color:p.col,letterSpacing:"2px",textTransform:"uppercase"}}>{p.ph}</span>
                    </div>
                    <div style={{fontFamily:"Playfair Display,serif",fontSize:"13px",fontWeight:"700",color:"var(--text)",marginBottom:"5px",fontStyle:"italic"}}>{p.q}</div>
                    <p style={{fontSize:"11px",color:"#b5a894",lineHeight:"1.6",marginBottom:"8px"}}>{p.desc}</p>
                    <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>
                      {p.tools.map(t=><span key={t} style={{fontFamily:"DM Mono,monospace",fontSize:"7px",padding:"2px 6px",border:`1px solid ${p.col}`,borderRadius:"2px",color:p.col,opacity:0.7}}>{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="ins">
                <div className="il">Applied to This Book</div>
                <p>"Every recipe in Part V was developed using this framework. The 'Why This Profile Works' section in each recipe is the Define stage made visible — the problem statement that each profile setting is the answer to. When you read 'Zero MW — any microwave energy would drive moisture to the surface, destroying the dry skin needed for crackling', that is a design brief, not just a cooking note."</p>
              </div>
            </div>

            {/* CREATIVE THINKING */}
            <div className={`tp${methodTab==="ct"?" on":""}`}>
              <div className="ins"><div className="il">SCAMPER — Applied to APAC Kitchen Innovation</div><p>"SCAMPER is a structured creative thinking tool. It forces you to look at any existing recipe, dish or process from seven different angles. Applied to APAC cuisine, it becomes a systematic way to generate new ideas from existing knowledge."</p></div>
              <div style={{margin:"18px 0"}}>
                {[
                  {lt:"S",nm:"Substitute",col:"#5090c0",q:"What if you replaced one element?",ex:"Substitute pork in Char Siu with king oyster mushroom. Same marinade. Same profile. Same visual — entirely different market. Or substitute the cook plate with the wave basket in Naan — what changes about the texture?",prompt:"What ingredient, technique, accessory or profile setting can be substituted?"},
                  {lt:"C",nm:"Combine",col:"#c97c2a",q:"What if you merged two ideas?",ex:"Combine the laksa broth technique with the gyoza dumpling — laksa-filled dumplings cooked in the dumpling tray with laksa broth in the cavities instead of water. New dish. No new equipment. No new profile.",prompt:"What two APAC flavour traditions, techniques or dishes could be merged into one?"},
                  {lt:"A",nm:"Adapt",col:"#5ab870",q:"What technique from elsewhere applies here?",ex:"Adapt the Japanese miso black cod marinade technique to a local fish — stingray marinated in gochujang for 24 hours. Korean technique, APAC ingredient, same high-speed profile.",prompt:"What cooking tradition from another APAC country could be applied to your local ingredients?"},
                  {lt:"M",nm:"Modify",col:"#c0c060",q:"What if you changed the scale or intensity?",ex:"Modify the Lava Cake profile — reduce MW from 50% to 35% and extend time by 15 seconds. You don't get a lava cake. You get a perfectly set chocolate fondant with a different texture profile entirely. One parameter change. New dish.",prompt:"What happens when you modify a single profile parameter by 10–20%? Test it."},
                  {lt:"P",nm:"Put to Other Uses",col:"#c47060",q:"What else could this recipe become?",ex:"The Char Siu recipe becomes: a pizza topping (combine with ChorizoPizza profile), a bao filling (adapt profile for steamed bun format), a ramen protein (serve cold, slice thin), a canapé (miniaturise, cook on the non-stick mould tray).",prompt:"Where else could this dish appear — different daypart, different format, different customer?"},
                  {lt:"E",nm:"Eliminate",col:"#8a7d69",q:"What if you removed a step or ingredient?",ex:"Eliminate the 24-hour marinade from Miso Black Cod. Reduce to 2-hour brine. Test whether the result changes enough to matter for a high-volume QSR operation. Sometimes the step you think is essential isn't.",prompt:"What step in this recipe exists by habit rather than necessity?"},
                  {lt:"R",nm:"Reverse",col:"#5ab870",q:"What if you flipped the sequence?",ex:"Reverse the Bulgogi technique — cook the meat first at high fan/low MW to develop char, then add the marinade and cook a final 20 seconds at low fan/high MW to set the glaze. Inverted sequence. Different caramelisation character.",prompt:"What happens if you do this recipe in the opposite order to what's written?"},
                ].map(s=>(
                  <div key={s.lt} style={{background:"var(--card)",border:"1px solid var(--border)",borderRadius:"4px",padding:"14px",marginBottom:"8px"}}>
                    <div style={{display:"flex",gap:"10px",alignItems:"flex-start"}}>
                      <div style={{width:"32px",height:"32px",borderRadius:"50%",background:s.col,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Playfair Display,serif",fontSize:"16px",fontWeight:"900",color:"var(--ink)",flexShrink:0}}>{s.lt}</div>
                      <div style={{flex:1}}>
                        <div style={{display:"flex",alignItems:"center",gap:"7px",marginBottom:"4px"}}>
                          <span style={{fontFamily:"Playfair Display,serif",fontSize:"13px",fontWeight:"700",color:"var(--text)"}}>{s.nm}</span>
                        </div>
                        <div style={{fontFamily:"Playfair Display,serif",fontSize:"11px",fontStyle:"italic",color:s.col,marginBottom:"5px"}}>{s.q}</div>
                        <p style={{fontSize:"11px",color:"#b5a894",lineHeight:"1.6",marginBottom:"6px"}}>{s.ex}</p>
                        <div style={{fontFamily:"DM Mono,monospace",fontSize:"8px",color:"#3a3020",borderLeft:"2px solid #2a2620",paddingLeft:"8px",lineHeight:"1.5"}}>{s.prompt}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AGILE */}
            <div className={`tp${methodTab==="ag"?" on":""}`}>
              <div className="ins"><div className="il">Agile Methodology — Applied to Kitchen Operations</div><p>"Agile was developed for software development. Its core principle — build something small, test it, learn from it, iterate — is one of the most useful frameworks ever developed for any creative and operational discipline. Including kitchens."</p></div>
              <div className="g2" style={{marginBottom:"18px"}}>
                {[
                  {nm:"The Sprint",ic:"⚡",col:"#5090c0",kitchen:"A 2-week menu development cycle. Not a 3-month kitchen redesign. Define one specific thing to test — a new protein, a new profile, a new accessory configuration — test it, evaluate it, decide."},
                  {nm:"The MVP Recipe",ic:"🥚",col:"#c97c2a",kitchen:"Minimum Viable Recipe. The simplest version of a dish that tests your core idea. Not the finished menu item. The earliest prototype that answers your key question with the least investment of time and ingredients."},
                  {nm:"The Backlog",ic:"📋",col:"#5ab870",kitchen:"Your list of recipe ideas not yet tested. Prioritised by potential impact and ease of development. Not everything on the menu wish list gets made — the backlog keeps track of what's waiting without cluttering what's active."},
                  {nm:"The Retrospective",ic:"🔍",col:"#c47060",kitchen:"Weekly food cost and wastage review. Not blame — learning. What worked this week? What didn't? What do we change next sprint? Structured reflection built into the operational rhythm, not an annual post-mortem."},
                  {nm:"Cross-functional Team",ic:"👥",col:"#c0c060",kitchen:"Chef + Operator + Front-of-house together in the development process. Not chef develops, operator implements, service discovers problems. All three in the room from sprint one."},
                  {nm:"Continuous Delivery",ic:"🔄",col:"#8a7d69",kitchen:"Don't wait for the perfect menu redesign. Release improvements continuously — one new dish per sprint, one profile refinement per week. The kitchen that ships small improvements consistently outperforms the kitchen that waits for perfection."},
                ].map(a=>(
                  <div key={a.nm} style={{background:"var(--card)",border:`1px solid var(--border)`,borderTop:`2px solid ${a.col}`,borderRadius:"4px",padding:"14px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"7px",marginBottom:"6px"}}>
                      <span style={{fontSize:"18px"}}>{a.ic}</span>
                      <span style={{fontFamily:"Playfair Display,serif",fontSize:"13px",fontWeight:"700",color:"var(--text)"}}>{a.nm}</span>
                    </div>
                    <p style={{fontSize:"10px",color:"#b5a894",lineHeight:"1.55"}}>{a.kitchen}</p>
                  </div>
                ))}
              </div>
              <div className="ins">
                <div className="il">The Sprint Menu Framework</div>
                <p>"Sprint 1: Define one dish to develop. Sprint 2: Build MVP recipe, test with staff. Sprint 3: Operator field test, customer blind tasting. Sprint 4: Food cost validation, profile refinement. Sprint 5: Soft launch on menu. Retrospective: what did we learn? What's next in the backlog? A new dish to menu in 10 weeks. Not 6 months."</p>
              </div>
              <div style={{background:"#0a1520",border:"1px solid #1a3050",borderRadius:"4px",padding:"16px",margin:"16px 0"}}>
                <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",letterSpacing:"3px",color:"#5090c0",textTransform:"uppercase",marginBottom:"10px"}}>The Connection</div>
                <p style={{fontSize:"11px",color:"#9ab0c8",lineHeight:"1.7",fontStyle:"italic"}}>"Daniel Theyagu's teaching in agile methodology gave me the language for something kitchens have always needed but never had a framework for — the structured sprint of trying, failing fast, learning, and iterating. The best operators I've worked with across APAC already do this intuitively. Agile names it, structures it, and makes it teachable."</p>
                <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",color:"#3a5070",marginTop:"8px",letterSpacing:"1px"}}>— Jimmy Mun</div>
              </div>
            </div>

            <div style={{textAlign:"center",marginTop:"36px"}}><button className="btn" onClick={()=>nav("prog")}>Continue to Part III — Equipment →</button></div>
          </div>
        </div>

        <div className={`pg${ch==="author"?" on":""}`}>
          <div className="wrap">
            <div className="ey">About the Author</div>
        </div>
        {/* PHRASE PAGE */}
        <div className={`pg${ch==="phrase"?" on":""}`}>
          <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"60px 28px",background:"radial-gradient(ellipse at 50% 40%,#1a1408 0%,#0d0c0a 70%)"}}>
            <div style={{fontFamily:"DM Mono,monospace",fontSize:"8px",letterSpacing:"5px",color:"#3a3020",textTransform:"uppercase",marginBottom:"48px"}}>The Thesis</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,38px)",fontWeight:"400",color:"#8a7d69",fontStyle:"italic",lineHeight:"1.9",marginBottom:"8px"}}>Seeing is believing.</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,38px)",fontWeight:"400",color:"#b5a894",fontStyle:"italic",lineHeight:"1.9",marginBottom:"8px"}}>Seeing is not enough.</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,38px)",fontWeight:"900",color:"#f0ead8",fontStyle:"italic",lineHeight:"1.9",marginBottom:"40px"}}>We must model it.</div>
            <div style={{width:"32px",height:"1px",background:"#c97c2a",margin:"0 auto 18px"}}/>
            <div style={{fontFamily:"DM Mono,monospace",fontSize:"9px",letterSpacing:"3px",color:"#c97c2a",textTransform:"uppercase",marginBottom:"4px"}}>Daniel Theyagu</div>
            <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",letterSpacing:"2px",color:"#3a3020",textTransform:"uppercase"}}>Mentor — Agile · Systems · Design · Creative Thinking</div>
            <div style={{marginTop:"60px"}}>
              <button className="btn" onClick={()=>nav("ack")}>Continue →</button>
            </div>
          </div>
        </div>

        {/* ACKNOWLEDGEMENTS */}
        <div className={`pg${ch==="ack"?" on":""}`}>
          <div className="wrap">
            <div className="ey">Acknowledgements</div>
            <h1 className="cht">On the <em>Shoulders</em><br/>of Others.</h1>
            <p className="body">No serious work is built alone. This book stands on the thinking, teaching and generosity of people who gave their knowledge freely and trusted me to carry it forward.</p>
            <div className="div"/>
            {[
              {name:"Daniel Theyagu",role:"Mentor — Agile Methodology, Systems Thinking, Design Thinking & Creative Thinking",note:"The phrase that anchors this entire book — 'Seeing is believing. Seeing is not enough. We must model it.' — came from a conversation with Daniel that changed how I see everything. His teaching gave me the framework to understand what I had been practising intuitively for years. The intellectual architecture of Part II of this book is built on his foundation."},
              {name:"The Kitchens of APAC",role:"15 markets · Countless demonstrations · Every operator who asked why",note:"To every chef who let me into their kitchen, every operator who pushed back on a profile setting, every student who asked a question I couldn't immediately answer — you shaped this book more than any textbook could."},
              {name:"The Food Scientists",role:"Louis Camille Maillard · Harold McGee · The tradition of culinary science",note:"Standing on the shoulders of those who took food seriously as a scientific subject, long before it was fashionable to do so."},
            ].map(p=>(
              <div key={p.name} style={{padding:"20px 0",borderBottom:"1px solid var(--b2)"}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:"16px",fontWeight:"700",color:"var(--text)",marginBottom:"3px"}}>{p.name}</div>
                <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",letterSpacing:"2px",color:"var(--gold)",textTransform:"uppercase",marginBottom:"10px"}}>{p.role}</div>
                <p style={{fontSize:"12px",color:"#b5a894",lineHeight:"1.7",fontStyle:"italic"}}>"{p.note}"</p>
              </div>
            ))}
            <div style={{textAlign:"center",marginTop:"36px"}}><button className="btn" onClick={()=>nav("preface")}>Continue to Preface →</button></div>
          </div>
        </div>

        {/* PREFACE */}
        <div className={`pg${ch==="preface"?" on":""}`}>
          <div className="wrap">
            <div className="ey">Preface</div>
            <h1 className="cht">From Demo<br/>to <em>Model.</em></h1>
            <p className="body">For years my job was to make food in front of people. Walk into a kitchen, set up a machine, cook something in under two minutes that should have taken twenty, and watch the room shift from sceptical to curious. It worked. People believed it when they saw it.</p>
            <p className="body">But seeing was never enough — not for me, and eventually not for the operators I was trying to help. They could watch the demo. They could taste the result. And then they'd go back to their kitchens and the knowledge would stop there, because nobody had given them the model behind what they saw.</p>
            <p className="body">That gap — between observation and understanding — is what this book exists to close.</p>
            <div className="ins">
              <div className="il">The Moment It Changed</div>
              <p>"I was sitting in a session with Daniel Theyagu when he said it: 'Seeing is believing. Seeing is not enough. We must model it.' I had been running food demonstrations across fifteen APAC markets for years. I had seen every version of the seeing-is-believing moment — the raised eyebrow, the surprised bite, the pulled-out phone. But I had never heard anyone name what was missing on the other side of that moment. Daniel named it. You must model it."</p>
            </div>
            <p className="body">This book is built around that principle. Every recipe is a model — not just a method. Every profile setting has a physics reason. Every business decision exists inside a system with upstream causes and downstream consequences. Every creative choice can be structured, prototyped and tested.</p>
            <p className="body">I started in professional kitchens. I moved into commercial equipment — fifteen APAC markets, major QSR chains, c-stores, hotel groups, culinary schools. I sat at the intersection of the kitchen and the boardroom for long enough to see that the same problems kept recurring, in Singapore and in Sydney, in Manila and in Kuala Lumpur, because the people making the decisions were only seeing. Nobody had given them the model.</p>
            <p className="body">This is the model. Or at least, the beginning of one.</p>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"13px",fontStyle:"italic",color:"var(--muted)",textAlign:"right",marginTop:"24px"}}>— Jimmy Mun, Singapore, 2026</div>
            <div style={{textAlign:"center",marginTop:"36px"}}><button className="btn" onClick={()=>nav("intro")}>Continue to Introduction →</button></div>
          </div>
        </div>

        {/* INTRODUCTION */}
        <div className={`pg${ch==="intro"?" on":""}`}>
          <div className="wrap">
            <div className="ey">Introduction</div>
            <h1 className="cht">Why APAC Needs a<br/><em>Different</em> Kind of<br/>Kitchen Thinking.</h1>
            <p className="body">The cookbooks available to APAC culinary students today were mostly written in the West, rooted in French classical technique, designed for kitchens built on infrastructure that much of Asia doesn't have and doesn't need.</p>
            <p className="body">The business books available to APAC food entrepreneurs treat the kitchen as a black box — inputs and outputs, cost and margin, but nothing about what happens in between and why it matters.</p>
            <p className="body">The equipment manuals tell you what buttons to press. They do not tell you why those buttons work, what happens at the molecular level when you press them, or how the decision to press them connects to every other decision in your operation.</p>
            <div className="div"/>
            <h2 className="st">How This Book Is Structured</h2>
            {[
              {part:"Part I — The Science",desc:"The physics and chemistry of high-speed cooking. Not simplified. Not dumbed down. Explained the way a chef thinks about it — through analogy, consequence and application."},
              {part:"Part II — The Method",desc:"Four thinking frameworks applied to the kitchen: Systems Thinking, Design Thinking, Creative Thinking and Agile Methodology. The tools that transform observation into understanding. Seeing into modelling."},
              {part:"Part III — The Equipment",desc:"Four controls. Infinite results. How to programme, how to read a profile, and which accessories change what's possible."},
              {part:"Part IV — The Business",desc:"The five kitchen systems. The CAPEX cascade. The real cost of every equipment decision."},
              {part:"Part V — The Recipes",desc:"22 APAC recipes. Each one is a worked example — not just ingredients and method, but the model behind why every profile setting was chosen."},
              {part:"Appendix — The Calculator",desc:"Cross-model profile conversion. Because the model should be portable across every version of the equipment."},
            ].map(s=>(
              <div key={s.part} style={{display:"flex",gap:"14px",padding:"12px 0",borderBottom:"1px solid var(--b2)"}}>
                <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",letterSpacing:"1px",color:"var(--gold)",width:"130px",flexShrink:0,paddingTop:"2px",textTransform:"uppercase",lineHeight:"1.5"}}>{s.part}</div>
                <div style={{fontSize:"12px",color:"#b5a894",lineHeight:"1.7"}}>{s.desc}</div>
              </div>
            ))}
            <div className="ins" style={{marginTop:"28px"}}>
              <div className="il">How to Read This Book</div>
              <p>"You do not have to read this book in order. If you are a practitioner, start with the recipes and work backwards into the science. If you are a student, start with Part I and let the recipes become your worked examples. If you are an operator or entrepreneur, start with Part IV and let the rest inform your decisions. The model holds regardless of where you enter it."</p>
            </div>
            <div style={{textAlign:"center",marginTop:"36px"}}><button className="btn" onClick={()=>nav("tech")}>Begin Part I — The Science →</button></div>
          </div>
        </div>

        {/* COVER - kept for direct navigation */}
        <div className={`pg${ch==="cover"?" on":""}`}>
          <div className="cover-pg cv">
            <div className="cv-tag">A Culinary Intelligence Guide</div>
            <h1>Wok<br/><em>Thinking</em></h1>
            <div className="cv-rule"/>
            <div className="cv-sub">APAC Kitchen Science, Systems Design and High-Speed Cooking</div>
            <div className="cv-by">By Jimmy Mun · 2026</div>
            <div className="cv-stats">
              {[["22","APAC Recipes"],["4","Frameworks"],["15","Markets"],["Original","Science"]].map(([n,l])=>(
                <div key={l}><div className="cst-n">{n}</div><div className="cst-l">{l}</div></div>
              ))}
            </div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"13px",color:"#8a7d69",fontStyle:"italic",maxWidth:"420px",margin:"18px auto",lineHeight:"1.8"}}>
              "Seeing is believing. Seeing is not enough.<br/>We must model it."
            </div>
            <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",letterSpacing:"2px",color:"#3a3020",textTransform:"uppercase",marginBottom:"22px"}}>— Daniel Theyagu</div>
            <button className="btn" onClick={()=>nav("phrase")}>Begin Reading →</button>
          </div>
        </div>

        {/* METHOD PAGE */}
        <div className={`pg${ch==="method"?" on":""}`}>
          <div className="wrap">
            <div className="ey">Part II — The Method</div>
            <h1 className="cht">Four Frameworks.<br/><em>One Kitchen.</em></h1>
            <p className="body">These are the thinking tools that transform observation into understanding. Not theory for its own sake — each framework is applied directly to food, kitchens and commercial operations.</p>
            <div className="ttabs">
              {[["sys","Systems Thinking"],["dt","Design Thinking"],["ct","Creative Thinking"],["ag","Agile Methodology"]].map(([id,lb])=>(
                <div key={id} className={`tt${methodTab===id?" on":""}`} onClick={()=>setMethodTab(id)}>{lb}</div>
              ))}
            </div>

            {/* SYSTEMS THINKING */}
            <div className={`tp${methodTab==="sys"?" on":""}`}>
              <div className="ins"><div className="il">The Iceberg Model</div><p>"Most operators respond only to what is visible — the event at the surface. The iceberg model reveals that beneath every event is a pattern, beneath every pattern is a structure, and beneath every structure is a mental model. To change results, you must work at the level of mental models — not events."</p></div>
              <div style={{margin:"18px 0"}}>
                {[
                  {lv:"Events",icon:"🌊",col:"#5090c0",pct:"10%",desc:"What you react to daily. A chef quits. A dish gets a bad review. Food cost spikes. A customer complains. These feel urgent. They are symptoms, not causes.",ex:"Example: Inconsistent burger quality across three outlets this week."},
                  {lv:"Patterns & Trends",icon:"📈",col:"#c97c2a",pct:"25%",desc:"When you zoom out across time. Labour turnover every 8–14 months. Menu complexity creeping upward each quarter. Consistent complaints about the same dish. Patterns repeat because the structure beneath them hasn't changed.",ex:"Example: Quality drops every time a new staff member is onboarded."},
                  {lv:"Systemic Structures",icon:"⚙️",col:"#5ab870",pct:"50%",desc:"The systems and relationships creating those patterns. Kitchen design locked to equipment. Training built around people, not profiles. Pricing models that ignore labour and energy. These structures persist until someone redesigns them.",ex:"Example: No standardised cook profile means every staff member cooks differently."},
                  {lv:"Mental Models",icon:"🧠",col:"#c47060",pct:"90%",desc:"The beliefs and assumptions at the deepest level. 'Real cooking takes time.' 'Equipment is a cost, not a capability.' 'Customers can't tell the difference.' These are invisible — until someone names them.",ex:"Example: 'We've always done it this way' is a mental model, not a fact."},
                ].map((item,i)=>(
                  <div key={item.lv} style={{display:"flex",gap:"12px",marginBottom:"8px",alignItems:"flex-start"}}>
                    <div style={{width:"3px",background:item.col,flexShrink:0,alignSelf:"stretch",borderRadius:"2px",opacity:0.8-i*0.1}}/>
                    <div style={{flex:1,background:"var(--card)",border:`1px solid var(--border)`,borderLeft:`2px solid ${item.col}`,borderRadius:"0 4px 4px 0",padding:"12px 14px"}}>
                      <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"5px"}}>
                        <span style={{fontSize:"16px"}}>{item.icon}</span>
                        <span style={{fontFamily:"Playfair Display,serif",fontSize:"13px",fontWeight:"700",color:"var(--text)"}}>{item.lv}</span>
                        <span style={{fontFamily:"DM Mono,monospace",fontSize:"7px",color:item.col,letterSpacing:"1px",padding:"1px 6px",border:`1px solid ${item.col}`,borderRadius:"2px"}}>VISIBLE {item.pct}</span>
                      </div>
                      <p style={{fontSize:"11px",color:"#b5a894",lineHeight:"1.6",marginBottom:"6px"}}>{item.desc}</p>
                      <p style={{fontSize:"10px",color:item.col,fontStyle:"italic"}}>{item.ex}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="div"/>
              <h2 className="st" style={{fontSize:"18px"}}>Wicked Problems in F&B</h2>
              <p className="body">Wicked problems have no clean solution — every fix creates a new problem, and consequences only emerge after you've committed.</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",margin:"14px 0"}}>
                {[
                  {t:"The Labour Paradox",d:"Automate to solve the staff shortage. But automation removes the craft argument that justifies your price point. The people who remain feel deskilled and leave faster.",c:"#c47060"},
                  {t:"Speed vs Authenticity",d:"Customers want faster service and authentic handcrafted food simultaneously. The moment they see a speed oven, 'authentic' disappears — even if the food is objectively better.",c:"#c97c2a"},
                  {t:"Menu as Identity",d:"Every chef puts dishes on for a reason. Every operator should cut 40% of the menu. These two needs directly contradict — and cutting the menu may save the business but cost you the chef who made it worth saving.",c:"#5090c0"},
                  {t:"The Middle Collapse",d:"Post-pandemic F&B has split into pure delivery economics and pure experience dining. The casual dining middle ground is being hollowed out. Most operators are sitting in it.",c:"#5ab870"},
                  {t:"Sustainability Paradox",d:"Precision cooking reduces food waste. But HACCP compliance often demands disposal of food that is actually safe. The science has moved. The law hasn't.",c:"#c0c060"},
                ].map(w=>(
                  <div key={w.t} style={{background:"var(--card)",border:`1px solid var(--border)`,borderTop:`2px solid ${w.c}`,borderRadius:"4px",padding:"12px"}}>
                    <div style={{fontFamily:"Playfair Display,serif",fontSize:"12px",fontWeight:"700",color:"var(--text)",marginBottom:"5px"}}>{w.t}</div>
                    <p style={{fontSize:"10px",color:"var(--muted)",lineHeight:"1.5"}}>{w.d}</p>
                  </div>
                ))}
              </div>
              <div className="div"/>
              <h2 className="st" style={{fontSize:"18px"}}>Mental Models for Kitchen Leaders</h2>
              <div style={{margin:"14px 0"}}>
                {[
                  {nm:"First Principles",ic:"🔬",desc:"What is cooking actually doing? Applying controlled energy to trigger desired chemical and physical transformations in food. That's it. Every piece of equipment is just a different method of delivering that energy. When you see it this way, you stop defending equipment and start asking: what's the most precise way to deliver the right energy, to the right place, at the right time?"},
                  {nm:"Inversion",ic:"🔄",desc:"Don't ask 'how do I build a great kitchen?' Ask 'what would guarantee my kitchen fails?' — inconsistent quality, long training cycles, high energy cost, staff-dependent execution, no data on what's working. Now invert every answer. You've just described what this system solves."},
                  {nm:"Second-Order Thinking",ic:"🎯",desc:"First order: high-speed oven = faster service. Second order: faster service = more table turns = higher revenue per seat. Third order: when everyone adopts speed cooking, speed is no longer a differentiator — only the quality of what comes out matters. The question becomes: what is your culinary IP?"},
                  {nm:"The Map Is Not the Territory",ic:"🗺️",desc:"A recipe is not a dish. A profile setting is not a food result. This book gives you the map. The territory is your specific ingredients, your altitude, your water hardness, your cold chain, your service window. Every operator must test and calibrate. The book is a departure point, not an arrival."},
                ].map(m=>(
                  <div key={m.nm} style={{background:"var(--card)",border:"1px solid var(--border)",borderRadius:"4px",padding:"14px",marginBottom:"8px",display:"flex",gap:"12px"}}>
                    <div style={{fontSize:"22px",flexShrink:0}}>{m.ic}</div>
                    <div><div style={{fontFamily:"Playfair Display,serif",fontSize:"13px",fontWeight:"700",color:"var(--text)",marginBottom:"4px"}}>{m.nm}</div><p style={{fontSize:"11px",color:"#b5a894",lineHeight:"1.6"}}>{m.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>

            {/* DESIGN THINKING */}
            <div className={`tp${methodTab==="dt"?" on":""}`}>
              <div className="ins"><div className="il">Design Thinking in the Kitchen</div><p>"Most recipe development starts with the dish. Design Thinking starts with the person — the operator making it, the customer eating it, and the system they both exist within. It turns a recipe from a method into a solution."</p></div>
              <div style={{margin:"18px 0"}}>
                {[
                  {ph:"01 Empathise",ic:"👂",col:"#5090c0",q:"Who are we actually cooking for?",desc:"Before developing any recipe or menu, understand the real context. Who is the operator? What are their constraints — kitchen size, staff skill, equipment, service speed? Who is the customer? What do they actually need vs what they say they want?",tools:["Operator shadowing","Customer journey mapping","Service time observation","Waste pattern analysis"]},
                  {ph:"02 Define",ic:"🎯",col:"#c97c2a",q:"What problem is this recipe solving?",desc:"Translate your observations into a clear problem statement. Not 'we need a new chicken dish' but 'operators need a consistent, high-margin protein that any skill level can execute in under 90 seconds during peak service.'",tools:["Problem statement framing","User needs mapping","Constraint listing","Success criteria definition"]},
                  {ph:"03 Ideate",ic:"💡",col:"#5ab870",q:"What are all the possible solutions?",desc:"Generate options without judgment first. What if we changed the cooking method? The protein? The flavour profile? The accessory? The portion size? Quantity of ideas matters at this stage. Judgment comes later.",tools:["SCAMPER (see Creative Thinking tab)","Cross-cultural flavour mapping","Profile variation testing","Ingredient substitution lists"]},
                  {ph:"04 Prototype",ic:"🧪",col:"#c0c060",q:"What is the minimum viable recipe?",desc:"Build the simplest version that tests your core idea. Not the finished dish — the earliest version that answers your key question. A prototype recipe uses available ingredients, existing profiles and the least amount of development time.",tools:["MVP recipe format","Profile variation A/B test","Blind tasting protocol","Time-and-motion trial"]},
                  {ph:"05 Test",ic:"📊",col:"#c47060",q:"Does it actually solve the problem?",desc:"Test with the real operator in their real kitchen under real conditions. Not a controlled demo environment. Real time pressure, real ingredients, real staff. Then iterate. Design Thinking is a loop, not a line.",tools:["Operator field testing","Blind customer tasting","Food cost validation","Service speed measurement"]},
                ].map(p=>(
                  <div key={p.ph} style={{background:"var(--card)",border:`1px solid var(--border)`,borderLeft:`3px solid ${p.col}`,borderRadius:"0 4px 4px 0",padding:"14px",marginBottom:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px",flexWrap:"wrap"}}>
                      <span style={{fontSize:"18px"}}>{p.ic}</span>
                      <span style={{fontFamily:"DM Mono,monospace",fontSize:"8px",color:p.col,letterSpacing:"2px",textTransform:"uppercase"}}>{p.ph}</span>
                    </div>
                    <div style={{fontFamily:"Playfair Display,serif",fontSize:"13px",fontWeight:"700",color:"var(--text)",marginBottom:"5px",fontStyle:"italic"}}>{p.q}</div>
                    <p style={{fontSize:"11px",color:"#b5a894",lineHeight:"1.6",marginBottom:"8px"}}>{p.desc}</p>
                    <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>
                      {p.tools.map(t=><span key={t} style={{fontFamily:"DM Mono,monospace",fontSize:"7px",padding:"2px 6px",border:`1px solid ${p.col}`,borderRadius:"2px",color:p.col,opacity:0.7}}>{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="ins">
                <div className="il">Applied to This Book</div>
                <p>"Every recipe in Part V was developed using this framework. The 'Why This Profile Works' section in each recipe is the Define stage made visible — the problem statement that each profile setting is the answer to. When you read 'Zero MW — any microwave energy would drive moisture to the surface, destroying the dry skin needed for crackling', that is a design brief, not just a cooking note."</p>
              </div>
            </div>

            {/* CREATIVE THINKING */}
            <div className={`tp${methodTab==="ct"?" on":""}`}>
              <div className="ins"><div className="il">SCAMPER — Applied to APAC Kitchen Innovation</div><p>"SCAMPER is a structured creative thinking tool. It forces you to look at any existing recipe, dish or process from seven different angles. Applied to APAC cuisine, it becomes a systematic way to generate new ideas from existing knowledge."</p></div>
              <div style={{margin:"18px 0"}}>
                {[
                  {lt:"S",nm:"Substitute",col:"#5090c0",q:"What if you replaced one element?",ex:"Substitute pork in Char Siu with king oyster mushroom. Same marinade. Same profile. Same visual — entirely different market. Or substitute the cook plate with the wave basket in Naan — what changes about the texture?",prompt:"What ingredient, technique, accessory or profile setting can be substituted?"},
                  {lt:"C",nm:"Combine",col:"#c97c2a",q:"What if you merged two ideas?",ex:"Combine the laksa broth technique with the gyoza dumpling — laksa-filled dumplings cooked in the dumpling tray with laksa broth in the cavities instead of water. New dish. No new equipment. No new profile.",prompt:"What two APAC flavour traditions, techniques or dishes could be merged into one?"},
                  {lt:"A",nm:"Adapt",col:"#5ab870",q:"What technique from elsewhere applies here?",ex:"Adapt the Japanese miso black cod marinade technique to a local fish — stingray marinated in gochujang for 24 hours. Korean technique, APAC ingredient, same high-speed profile.",prompt:"What cooking tradition from another APAC country could be applied to your local ingredients?"},
                  {lt:"M",nm:"Modify",col:"#c0c060",q:"What if you changed the scale or intensity?",ex:"Modify the Lava Cake profile — reduce MW from 50% to 35% and extend time by 15 seconds. You don't get a lava cake. You get a perfectly set chocolate fondant with a different texture profile entirely. One parameter change. New dish.",prompt:"What happens when you modify a single profile parameter by 10–20%? Test it."},
                  {lt:"P",nm:"Put to Other Uses",col:"#c47060",q:"What else could this recipe become?",ex:"The Char Siu recipe becomes: a pizza topping (combine with ChorizoPizza profile), a bao filling (adapt profile for steamed bun format), a ramen protein (serve cold, slice thin), a canapé (miniaturise, cook on the non-stick mould tray).",prompt:"Where else could this dish appear — different daypart, different format, different customer?"},
                  {lt:"E",nm:"Eliminate",col:"#8a7d69",q:"What if you removed a step or ingredient?",ex:"Eliminate the 24-hour marinade from Miso Black Cod. Reduce to 2-hour brine. Test whether the result changes enough to matter for a high-volume QSR operation. Sometimes the step you think is essential isn't.",prompt:"What step in this recipe exists by habit rather than necessity?"},
                  {lt:"R",nm:"Reverse",col:"#5ab870",q:"What if you flipped the sequence?",ex:"Reverse the Bulgogi technique — cook the meat first at high fan/low MW to develop char, then add the marinade and cook a final 20 seconds at low fan/high MW to set the glaze. Inverted sequence. Different caramelisation character.",prompt:"What happens if you do this recipe in the opposite order to what's written?"},
                ].map(s=>(
                  <div key={s.lt} style={{background:"var(--card)",border:"1px solid var(--border)",borderRadius:"4px",padding:"14px",marginBottom:"8px"}}>
                    <div style={{display:"flex",gap:"10px",alignItems:"flex-start"}}>
                      <div style={{width:"32px",height:"32px",borderRadius:"50%",background:s.col,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Playfair Display,serif",fontSize:"16px",fontWeight:"900",color:"var(--ink)",flexShrink:0}}>{s.lt}</div>
                      <div style={{flex:1}}>
                        <div style={{display:"flex",alignItems:"center",gap:"7px",marginBottom:"4px"}}>
                          <span style={{fontFamily:"Playfair Display,serif",fontSize:"13px",fontWeight:"700",color:"var(--text)"}}>{s.nm}</span>
                        </div>
                        <div style={{fontFamily:"Playfair Display,serif",fontSize:"11px",fontStyle:"italic",color:s.col,marginBottom:"5px"}}>{s.q}</div>
                        <p style={{fontSize:"11px",color:"#b5a894",lineHeight:"1.6",marginBottom:"6px"}}>{s.ex}</p>
                        <div style={{fontFamily:"DM Mono,monospace",fontSize:"8px",color:"#3a3020",borderLeft:"2px solid #2a2620",paddingLeft:"8px",lineHeight:"1.5"}}>{s.prompt}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AGILE */}
            <div className={`tp${methodTab==="ag"?" on":""}`}>
              <div className="ins"><div className="il">Agile Methodology — Applied to Kitchen Operations</div><p>"Agile was developed for software development. Its core principle — build something small, test it, learn from it, iterate — is one of the most useful frameworks ever developed for any creative and operational discipline. Including kitchens."</p></div>
              <div className="g2" style={{marginBottom:"18px"}}>
                {[
                  {nm:"The Sprint",ic:"⚡",col:"#5090c0",kitchen:"A 2-week menu development cycle. Not a 3-month kitchen redesign. Define one specific thing to test — a new protein, a new profile, a new accessory configuration — test it, evaluate it, decide."},
                  {nm:"The MVP Recipe",ic:"🥚",col:"#c97c2a",kitchen:"Minimum Viable Recipe. The simplest version of a dish that tests your core idea. Not the finished menu item. The earliest prototype that answers your key question with the least investment of time and ingredients."},
                  {nm:"The Backlog",ic:"📋",col:"#5ab870",kitchen:"Your list of recipe ideas not yet tested. Prioritised by potential impact and ease of development. Not everything on the menu wish list gets made — the backlog keeps track of what's waiting without cluttering what's active."},
                  {nm:"The Retrospective",ic:"🔍",col:"#c47060",kitchen:"Weekly food cost and wastage review. Not blame — learning. What worked this week? What didn't? What do we change next sprint? Structured reflection built into the operational rhythm, not an annual post-mortem."},
                  {nm:"Cross-functional Team",ic:"👥",col:"#c0c060",kitchen:"Chef + Operator + Front-of-house together in the development process. Not chef develops, operator implements, service discovers problems. All three in the room from sprint one."},
                  {nm:"Continuous Delivery",ic:"🔄",col:"#8a7d69",kitchen:"Don't wait for the perfect menu redesign. Release improvements continuously — one new dish per sprint, one profile refinement per week. The kitchen that ships small improvements consistently outperforms the kitchen that waits for perfection."},
                ].map(a=>(
                  <div key={a.nm} style={{background:"var(--card)",border:`1px solid var(--border)`,borderTop:`2px solid ${a.col}`,borderRadius:"4px",padding:"14px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"7px",marginBottom:"6px"}}>
                      <span style={{fontSize:"18px"}}>{a.ic}</span>
                      <span style={{fontFamily:"Playfair Display,serif",fontSize:"13px",fontWeight:"700",color:"var(--text)"}}>{a.nm}</span>
                    </div>
                    <p style={{fontSize:"10px",color:"#b5a894",lineHeight:"1.55"}}>{a.kitchen}</p>
                  </div>
                ))}
              </div>
              <div className="ins">
                <div className="il">The Sprint Menu Framework</div>
                <p>"Sprint 1: Define one dish to develop. Sprint 2: Build MVP recipe, test with staff. Sprint 3: Operator field test, customer blind tasting. Sprint 4: Food cost validation, profile refinement. Sprint 5: Soft launch on menu. Retrospective: what did we learn? What's next in the backlog? A new dish to menu in 10 weeks. Not 6 months."</p>
              </div>
              <div style={{background:"#0a1520",border:"1px solid #1a3050",borderRadius:"4px",padding:"16px",margin:"16px 0"}}>
                <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",letterSpacing:"3px",color:"#5090c0",textTransform:"uppercase",marginBottom:"10px"}}>The Connection</div>
                <p style={{fontSize:"11px",color:"#9ab0c8",lineHeight:"1.7",fontStyle:"italic"}}>"Daniel Theyagu's teaching in agile methodology gave me the language for something kitchens have always needed but never had a framework for — the structured sprint of trying, failing fast, learning, and iterating. The best operators I've worked with across APAC already do this intuitively. Agile names it, structures it, and makes it teachable."</p>
                <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",color:"#3a5070",marginTop:"8px",letterSpacing:"1px"}}>— Jimmy Mun</div>
              </div>
            </div>

            <div style={{textAlign:"center",marginTop:"36px"}}><button className="btn" onClick={()=>nav("prog")}>Continue to Part III — Equipment →</button></div>
          </div>
        </div>


          <div className="wrap">
            <div className="ey">About the Author</div>
            <h1 className="cht">From the Kitchen<br/>to the <em>Model.</em></h1>
            <p className="body">I started in professional kitchens. The discipline of mise en place, the physics of heat and protein, the culture of precision under pressure — these shaped how I think about food at a fundamental level. When I transitioned into the commercial equipment world, I brought that kitchen perspective with me.</p>
            <p className="body">For years I sat at the intersection of culinary development and sales — conducting food demonstrations across fifteen APAC markets, developing recipe profiles for QSR chains and c-store operators, training kitchen teams across Southeast Asia, Northeast Asia, Australia and New Zealand.</p>
            <p className="body">This book is what I wish I had when I started. Not a product manual. Not a brand brochure. A real culinary and technical guide — the science behind the technology, explained the way a chef thinks about it.</p>
            <div className="div"/>
            {[{y:"Chef Years",t:"Professional kitchen training. Foundation in heat science, texture, and flavour development."},{y:"Equipment Transition",t:"First exposure to high-speed oven technology. The moment of realisation: the same culinary principles apply, but the physics is different."},{y:"Culinary Development",t:"Systematic recipe development for high-speed ovens across APAC markets. First Train-the-Trainer programme developed."},{y:"Strategic Accounts",t:"Manager, Strategic Accounts — 15 APAC markets. Where culinary knowledge meets commercial strategy."},{y:"This Book",t:"Combining 10+ years of culinary and commercial equipment experience into a resource for the APAC food community."}].map(item=>(
              <div key={item.y} style={{display:"flex",gap:"14px",padding:"10px 0",borderBottom:"1px solid var(--b2)"}}>
                <div style={{fontFamily:"DM Mono",fontSize:"8px",letterSpacing:"1px",color:"var(--gold)",width:"110px",flexShrink:0,paddingTop:"2px",textTransform:"uppercase"}}>{item.y}</div>
                <div style={{fontSize:"12px",color:"#b5a894",lineHeight:"1.6"}}>{item.t}</div>
              </div>
            ))}
            <div className="ins" style={{marginTop:"28px"}}>
              <div className="il">Author's Note</div>
              <p>"This book was not written to sell equipment. It was written to give back — to the chefs who welcomed me into their kitchens, to the operators who trusted me with their menus, and to anyone who wants to understand not just how to use a high-speed oven, but why it works the way it does."</p>
            </div>
            <div style={{textAlign:"center",marginTop:"36px"}}><button className="btn" onClick={()=>nav("preface")}>Continue to Preface →</button></div>
          </div>
        </div>

        <div className={`pg${ch==="tech"?" on":""}`}>
          <div className="wrap">
            <div className="ey">Part I — The Science</div>
            <h1 className="cht">The Science of<br/><em>Fast. Perfect.</em></h1>
            <p className="body">Understanding the physics behind high-speed cooking — from microwave myths to Maillard mastery to original culinary findings.</p>
            <div className="ttabs">
              {[["myths","Microwave Myths"],["mol","Molecular Triggers"],["mal","Maillard & Toast"],["cav","Cavity Position"],["inv","Inverter vs Standard"],["stm","Steam Warning ★"]].map(([id,lb])=>(
                <div key={id} className={`tt${methodTab===id?" on":""}`} onClick={()=>setMethodTab(id)}>{lb}</div>
              ))}
            </div>
            <div className={`tp${techTab==="myths"?" on":""}`}>
              <div className="myth"><p className="body" style={{fontWeight:"500",color:"var(--text)",marginBottom:"5px"}}>Myth: "Microwaves cook from the inside out"</p><p className="body" style={{marginBottom:0}}>People assumed invisible waves must reach the centre first. One of the most persistent myths in cooking.</p></div>
              <div className="fact"><p className="body" style={{fontWeight:"500",color:"var(--text)",marginBottom:"5px"}}>Fact: Microwaves penetrate only 1–1.5 inches from the surface inward</p><p className="body" style={{marginBottom:0}}>At 2,450 MHz, microwave energy penetrates food to approximately 2.5–3.8 cm maximum. Everything beyond heats by ordinary conduction — outside in, same as a conventional oven. Just faster in the outer zone.</p></div>
              <div className="ins"><div className="il">The Rubbing Hands Analogy</div><p>"Rub your palms together rapidly and you generate heat through molecular friction. Microwave energy does exactly this — forcing polar molecules to rotate billions of times per second. That vibration creates friction. Friction creates heat. But only to a depth of about 1.5 inches."</p></div>
              <div className="myth" style={{marginTop:"14px"}}><p className="body" style={{fontWeight:"500",color:"var(--text)",marginBottom:"5px"}}>Myth: "Microwaves use radiation to cook food"</p><p className="body" style={{marginBottom:0}}>Microwaves are non-ionising electromagnetic waves — closer to radio waves than X-rays. They excite molecules thermally. They do not irradiate food.</p></div>
              <div className="fact"><p className="body" style={{fontWeight:"500",color:"var(--text)",marginBottom:"5px"}}>Fact: The only effect of microwaves on food is thermal</p><p className="body" style={{marginBottom:0}}>High-speed oven magnetrons operate at 2.45 GHz. This frequency was specifically chosen because it penetrates food without being wholly absorbed by the first water layer encountered.</p></div>
            </div>
            <div className={`tp${techTab==="mol"?" on":""}`}>
              <p className="body">Not all parts of food heat equally in a microwave. Energy is absorbed selectively — this is why a pie filling scorches while the pastry stays barely warm.</p>
              <div className="mol-grid">
                {[{ic:"💧",nm:"Water",sb:"Primary Absorber",de:"Dipolar molecule. High-moisture foods heat fastest."},{ic:"🧈",nm:"Fats & Oils",sb:"Secondary Absorber",de:"Fats can exceed 100°C — unlike water which caps at boiling. Fatty zones cause unexpected burns."},{ic:"🍬",nm:"Sugars & Salts",sb:"Tertiary Absorbers",de:"Sugars are polar molecules. Sugar-rich glazes heat much faster than surrounding food."}].map(m=>(
                  <div className="mol" key={m.nm}><div className="mol-ic">{m.ic}</div><div className="mol-nm">{m.nm}</div><div className="mol-sb">{m.sb}</div><p className="mol-de">{m.de}</p></div>
                ))}
              </div>
              <div className="ins"><div className="il">The Chef's Takeaway</div><p>"Understanding what triggers microwave heating — water, fat, sugar, salt — tells you exactly why microwave-only cooking produces uneven results. A piece of fish with a sugary glaze will scorch before the flesh is cooked through. Impingement solves both."</p></div>
            </div>
            <div className={`tp${techTab==="mal"?" on":""}`}>
              <p className="body">In 1912, Louis Camille Maillard described a reaction between amino acids and reducing sugars when heated. It produces hundreds of distinct flavour compounds. Tap any level below.</p>
              <div className="toast-row">
                {TOAST_LEVELS.map((t,i)=>(
                  <div key={i} className="t-it" onClick={()=>setToastSel(toastSel===i?null:i)}>
                    <div className="t-sl" style={{background:`linear-gradient(180deg,${t.crust} 0%,${t.crust} 65%,${t.crumb} 100%)`,borderColor:toastSel===i?"var(--gold)":"var(--border)"}}/>
                    <div className="t-nm">{t.name}</div>
                    <div className="t-tp">{t.temp}</div>
                  </div>
                ))}
              </div>
              {toastSel!==null&&<div className="t-pop"><strong style={{color:"var(--gold)",fontFamily:"DM Mono",fontSize:"8px",letterSpacing:"2px",textTransform:"uppercase"}}>{TOAST_LEVELS[toastSel].name} — {TOAST_LEVELS[toastSel].temp}</strong><br/><br/><strong style={{color:"var(--text)"}}>Science: </strong>{TOAST_LEVELS[toastSel].science}<br/><br/><strong style={{color:"var(--gold)"}}>Impingement: </strong>{TOAST_LEVELS[toastSel].imp}</div>}
            </div>
            <div className={`tp${techTab==="cav"?" on":""}`}>
              <p className="body">Where the magnetron port is positioned determines where energy concentrates inside the food. For dense proteins, this is critical.</p>
              <div className="g2">
                <div style={{background:"#1a0a06",border:"1px solid #3a2010",borderRadius:"4px",padding:"18px"}}><div style={{fontFamily:"DM Mono",fontSize:"8px",letterSpacing:"2px",color:"var(--red)",textTransform:"uppercase",marginBottom:"8px"}}>✕ Top Launch — Problematic</div><p style={{fontSize:"11px",color:"#c47060",lineHeight:"1.6"}}>Energy fires downward, concentrating at the top surface first. For dense products, the top surface heats rapidly and can dry out before the core reaches temperature.</p></div>
                <div style={{background:"#0a1a0a",border:"1px solid #153025",borderRadius:"4px",padding:"18px"}}><div style={{fontFamily:"DM Mono",fontSize:"8px",letterSpacing:"2px",color:"var(--green)",textTransform:"uppercase",marginBottom:"8px"}}>✓ Side Launch — Superior</div><p style={{fontSize:"11px",color:"#5a9060",lineHeight:"1.6"}}>Waves travel horizontally through the product cross-section. Energy distributes evenly across the full height. For dense products, side launch is decisively better.</p></div>
              </div>
            </div>
            <div className={`tp${techTab==="inv"?" on":""}`}>
              <p className="body">When you select "50% power" on a conventional microwave, the oven fires at 100% then switches off. This is not 50% power. It's 100% power with gaps.</p>
              <div className="g2">
                <div style={{background:"#1a0a06",border:"1px solid #3a1515",borderRadius:"4px",padding:"18px"}}>
                  <div style={{fontFamily:"DM Mono",fontSize:"8px",letterSpacing:"2px",color:"var(--red)",textTransform:"uppercase",marginBottom:"8px"}}>Standard — On/Off Pulsing</div>
                  <div style={{display:"flex",gap:"3px",height:"28px",alignItems:"flex-end",margin:"10px 0"}}>
                    {[1,0,1,0,1,0,1,0,1,0,1,0].map((on,i)=><div key={i} style={{flex:1,height:on?"100%":"15%",background:on?"#c44":"#2a1515",borderRadius:"2px 2px 0 0"}}/>)}
                  </div>
                  <p style={{fontSize:"11px",color:"#c47060",lineHeight:"1.5"}}>Hot spots and cold spots in every cook.</p>
                </div>
                <div style={{background:"#0a1a0a",border:"1px solid #153025",borderRadius:"4px",padding:"18px"}}>
                  <div style={{fontFamily:"DM Mono",fontSize:"8px",letterSpacing:"2px",color:"var(--green)",textTransform:"uppercase",marginBottom:"8px"}}>Inverter / MW Assist — Continuous</div>
                  <div style={{display:"flex",gap:"3px",height:"28px",alignItems:"flex-end",margin:"10px 0"}}>
                    {[1,1,1,1,1,1,1,1,1,1,1,1].map((on,i)=><div key={i} style={{flex:1,height:"50%",background:"#2a8a40",borderRadius:"2px 2px 0 0"}}/>)}
                  </div>
                  <p style={{fontSize:"11px",color:"#5a9060",lineHeight:"1.5"}}>True continuous power. Even heating. Texture and moisture preserved.</p>
                </div>
              </div>
            </div>
            <div className={`tp${techTab==="stm"?" on":""}`}>
              <div className="ob"><div style={{fontSize:"26px",flexShrink:0}}>📝</div><div><div className="ob-l">Original Culinary Finding — Jimmy Mun · Ref: JMUN-IP-001-2026 · 19 April 2026</div><div className="ob-t">Original observation developed through hands-on culinary testing. As of writing, no formal engineering study has been published on this specific interaction.</div></div></div>
              <p className="body">In a conventional oven, adding steam is foundational technique. In an active microwave combination oven cavity, steam introduction produces the opposite effect.</p>
              <div className="g3">
                {[{ic:"💨",t:"Pure Steam (Vapour)",c:"var(--blue)",d:"Water vapour absorbs at ~22 GHz — nearly 10× the 2.45 GHz oven frequency. Pure steam is a weak microwave absorber. Not the primary problem."},{ic:"🌫️",t:"Droplets & Mist",c:"var(--gold)",d:"Spraying water creates liquid droplets. Liquid water IS a strong 2.45 GHz absorber. These droplets intercept and absorb energy before it reaches the food."},{ic:"💧",t:"Surface Condensate",c:"var(--red)",d:"Steam condenses on cooler food as a liquid film. This film captures incoming MW energy at the surface — starving the product core of the penetration it needs."}].map(item=>(
                  <div key={item.t} style={{background:"var(--card)",border:`1px solid var(--border)`,borderTop:`2px solid ${item.c}`,borderRadius:"4px",padding:"14px"}}>
                    <div style={{fontSize:"22px",marginBottom:"6px"}}>{item.ic}</div>
                    <div style={{fontFamily:"Playfair Display",fontSize:"12px",fontWeight:"700",color:"var(--text)",marginBottom:"5px"}}>{item.t}</div>
                    <p style={{fontSize:"10px",color:"var(--muted)",lineHeight:"1.5"}}>{item.d}</p>
                  </div>
                ))}
              </div>
              <div className="ins"><div className="il">Chef's Principle</div><p>"In a conventional oven, steam is your friend. In a microwave cavity, steam is your enemy — it places an absorbing barrier between the energy source and your product."</p></div>
            </div>
            <div style={{textAlign:"center",marginTop:"36px"}}><button className="btn" onClick={()=>nav("prog")}>Continue to Programming →</button></div>
          </div>
        </div>

        <div className={`pg${ch==="prog"?" on":""}`}>
          <div className="wrap">
            <div className="ey">Part III — The Equipment</div>
            <h1 className="cht">Four Controls.<br/><em>Infinite Results.</em></h1>
            <p className="body">Understanding the relationship between temperature, time, fan, and microwave — and why adjusting one changes everything.</p>
            <div className="g2">
              <div>
                {[{lb:"Temperature",val:pTemp,set:setPTemp,min:100,max:275,unit:"°C",c:"#e06030"},{lb:"Fan / Impingement",val:pFan,set:setPFan,min:10,max:100,unit:"%",c:"var(--gold)"},{lb:"Microwave Assist",val:pMW,set:setPMW,min:0,max:100,unit:"%",c:"var(--blue)"},{lb:"Cook Time",val:pTime,set:setPTime,min:5,max:180,unit:"s",c:"var(--green)"}].map(sl=>(
                  <div className="sl-g" key={sl.lb}>
                    <div className="sl-h"><span className="sl-n">{sl.lb}</span><span className="sl-v" style={{color:sl.c}}>{sl.val}{sl.unit}</span></div>
                    <input type="range" min={sl.min} max={sl.max} value={sl.val} onChange={e=>sl.set(Number(e.target.value))} style={{"--c":sl.c,"--p":`${((sl.val-sl.min)/(sl.max-sl.min))*100}%`}}/>
                  </div>
                ))}
                <div style={{marginTop:"14px"}}>
                  {advice().map((a,i)=>(
                    <div key={i} style={{display:"flex",gap:"7px",padding:"7px 10px",borderRadius:"3px",marginBottom:"5px",fontSize:"11px",lineHeight:"1.5",background:a.t==="ok"?"#0a1a10":a.t==="warn"?"#1a1005":"#0a1220",border:`1px solid ${a.t==="ok"?"#153025":a.t==="warn"?"#3a2510":"#1a3050"}`,color:a.t==="ok"?"var(--green)":a.t==="warn"?"var(--gold)":"var(--blue)"}}>
                      <span>{a.t==="ok"?"✓":a.t==="warn"?"⚠":"ℹ"}</span><span>{a.m}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ov">
                <div style={{fontFamily:"DM Mono",fontSize:"7px",color:"#4a8aba",letterSpacing:"2px",marginBottom:"10px",textTransform:"uppercase"}}>Oven Profile Display</div>
                {[{ic:"🌡️",l:"Temperature",v:`${pTemp}°C`},{ic:"⏱️",l:"Time",v:`00:${String(Math.floor(pTime/60)).padStart(2,"0")}:${String(pTime%60).padStart(2,"0")}`},{ic:"💨",l:"Fan",v:`${pFan}%`},{ic:"📡",l:"Microwave",v:`${pMW}%`},{ic:"⚡",l:"MW Delivered",v:`${Math.round((pMW/100)*800)}W`}].map(r=>(
                  <div className="ov-row" key={r.l}><span className="ov-ic">{r.ic}</span><span className="ov-l">{r.l}</span><span className="ov-v">{r.v}</span></div>
                ))}
              </div>
            </div>
            <div className="div"/>
            <h2 className="st">Profile Reference Guide</h2>
            <table className="ref-t">
              <thead><tr><th>Product Type</th><th>Fan</th><th>Microwave</th><th>Guide Time</th><th>Key Watch</th></tr></thead>
              <tbody>
                {[["Thin toast / panini","100%","0–20%","30–60s","Zero MW for pure crisp"],["Dense protein / burger","80%","60–75%","90–150s","Verify core 74°C+"],["Pastry (dry filling)","100%","0%","60–90s","No MW — steam kills crust"],["Pastry (wet filling)","10–20%","70–80%","90–120s","Low fan first, high fan last"],["Fish / seafood","70–80%","40–60%","40–90s","Don't over-MW — texture loss"],["Eggs / dairy","20–40%","30–50%","30–60s","Stay under 60% MW"],["Soup / liquid","10%","80–100%","60–90s","Low fan — no surface to crisp"],["Frozen dense item","60–70%","70–85%","2–4 min","Reduce fan for long cook"],["Reheating (chilled)","30–50%","50–75%","30–60s","Two-stage: heat then crisp"],["Bread / flatbread","100%","0%","45–70s","Impingement only"]].map(([p,f,m,t,w])=>(
                  <tr key={p}><td>{p}</td><td><span className="tag tg">{f}</span></td><td><span className={`tag ${m==="0%"||m.startsWith("0–")?"tn":"tg"}`}>{m}</span></td><td><span style={{fontFamily:"DM Mono",fontSize:"9px",color:"var(--muted)"}}>{t}</span></td><td style={{fontSize:"10px",color:"var(--muted)"}}>{w}</td></tr>
                ))}
              </tbody>
            </table>
            <div style={{textAlign:"center",marginTop:"28px"}}><button className="btn" onClick={()=>nav("acc")}>Continue to Accessories →</button></div>
          </div>
        </div>

        <div className={`pg${ch==="acc"?" on":""}`}>
          <div className="wrap">
            <div className="ey">Part III — Accessories</div>
            <h1 className="cht">One Oven.<br/><em>Many Kitchens.</em></h1>
            <p className="body">The right accessory doesn't just change what you can cook — it changes what equipment you need to own. Each is an optional separate purchase, chosen based on your menu requirements.</p>
            <div className="div"/>
            {[{ic:"⬛",nm:"Cook Plate",opt:false,tag:"Standard",c:"var(--blue)",desc:"Conducts bottom heat at 260°C while impingement works the top simultaneously. Replicates contact grill effect for toast, panini, flatbreads and fish fillets."},{ic:"🎨",nm:"Colour-Coded Trays",opt:false,tag:"Standard",c:"var(--blue)",desc:"Vitreous enamel, non-stick, microwave-transparent. Black (proteins), Green (vegetables), Red (allergens), Blue (gluten-free). Builds HACCP allergen management into the physical workflow."},{ic:"🍲",nm:"Signature Containers",opt:false,tag:"Standard",c:"var(--blue)",desc:"Optimised wall thickness for microwave energy transfer into liquid contents. Replaces bain marie for soups, scrambled eggs, sauces. ½L and 1½L sizes."},{ic:"🥟",nm:"12x Dumpling Tray",opt:true,tag:"Optional",c:"var(--gold)",desc:"Replicates pan-steam-fry technique in one step. Water in cavities generates steam while impingement browns the exposed top. 12 dumplings simultaneously."},{ic:"🥪",nm:"Panini Grill Plate",opt:true,tag:"Optional",c:"var(--gold)",desc:"Ridged surface creates contact grill marks via localised conduction. Authentic grill aesthetics without a dedicated contact grill unit."},{ic:"🍳",nm:"4x Non-Stick Mould",opt:true,tag:"Optional",c:"var(--gold)",desc:"Individual cavity microclimates for pancakes, eggs, muffins, Yorkshire puddings. Four portions simultaneously."},{ic:"🧺",nm:"Wave / Air Frying Tray",opt:true,tag:"Optional · Part No. 32Z4032",c:"var(--gold)",desc:"Elevates food so impingement jets attack both surfaces simultaneously. Replicates deep fry conditions without oil. Recommended only if menu includes fried or crispy-finish frozen SKUs."},{ic:"🥩",nm:"Griddle (e4/e4s only)",opt:true,tag:"Optional · e4 Only",c:"var(--red)",desc:"Enables the 70/30 technique — pre-grill proteins to 70% on a contact grill for marks and char, finish the remaining 30% in the oven for consistent core temperature."}].map(acc=>(
              <div key={acc.nm} style={{display:"flex",gap:"14px",padding:"16px 0",borderBottom:"1px solid var(--b2)"}}>
                <div style={{fontSize:"26px",flexShrink:0,width:"36px",textAlign:"center",paddingTop:"2px"}}>{acc.ic}</div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"5px",flexWrap:"wrap"}}>
                    <div style={{fontFamily:"Playfair Display",fontSize:"14px",fontWeight:"700",color:"var(--text)"}}>{acc.nm}</div>
                    <span className={`tag ${acc.opt?"to":"tb"}`}>{acc.tag}</span>
                  </div>
                  <p style={{fontSize:"11px",color:"#b5a894",lineHeight:"1.6"}}>{acc.desc}</p>
                </div>
              </div>
            ))}
            <div style={{textAlign:"center",marginTop:"28px"}}><button className="btn" onClick={()=>nav("sys")}>Continue to Systems Thinking →</button></div>
          </div>
        </div>

        <div className={`pg${ch==="sys"?" on":""}`}>
          <div className="wrap">
            <div className="ey">Part IV — The Business</div>
            <h1 className="cht">One Decision.<br/><em>Many Savings.</em></h1>
            <p className="body">Most operators evaluate equipment in isolation: "What does this oven cost?" The right question is: "What does this decision cost — and save — across the entire system my kitchen operates within?"</p>
            <div className="sys-nodes">
              {SYSTEMS.map((s,i)=>(
                <div key={i} className={`sn${sysSel===i?" on":""}`} style={{"--nc":s.color}} onClick={()=>setSysSel(sysSel===i?null:i)}>
                  <div className="sn-ic">{s.icon}</div>
                  <div className="sn-nm">{s.name}</div>
                  <div className="sn-sb">{s.sub}</div>
                </div>
              ))}
            </div>
            {sysSel!==null&&<div className="t-pop" style={{border:`1px solid ${SYSTEMS[sysSel].color}`}}><strong style={{color:SYSTEMS[sysSel].color,fontFamily:"DM Mono",fontSize:"8px",letterSpacing:"2px",textTransform:"uppercase"}}>{SYSTEMS[sysSel].name}</strong><br/><br/>{SYSTEMS[sysSel].detail}</div>}
            <div className="div"/>
            <h2 className="st">The CAPEX Cascade</h2>
            <p className="body">Every piece of commercial kitchen equipment triggers downstream capital expenditures. The equipment itself is rarely the largest cost.</p>
            <div style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"10px 14px",background:"#0f0d08",border:"1px solid #2a2215",borderLeft:"3px solid #4a3820",borderRadius:"0 4px 4px 0",marginBottom:"4px"}}>
              <span style={{fontSize:"14px",flexShrink:0}}>⚠️</span>
              <p style={{fontSize:"10px",color:"#4a3820",lineHeight:"1.65"}}><strong style={{color:"#6a5030"}}>Indicative figures only.</strong> All costs shown are approximate estimates for illustrative purposes based on Singapore market conditions circa 2026. Actual figures vary by market, supplier, specification and timing. See full disclaimer in the Appendix Calculator section.</p>
            </div>
            <div style={{background:"#0f0e0b",border:"1px solid var(--b2)",borderRadius:"4px",padding:"20px",margin:"18px 0"}}>
              {[{ic:"🍟",nm:"Commercial Deep Fryer",cost:"SGD $5,000–$12,000"},{ic:"🌬️",nm:"Extraction Hood + Ducting",cost:"SGD $8,000–$20,000"},{ic:"🧯",nm:"Fire Suppression System",cost:"SGD $4,000–$8,000"},{ic:"⚡",nm:"Electrical / Gas Upgrade",cost:"SGD $3,000–$8,000"},{ic:"🚰",nm:"Grease Trap",cost:"SGD $2,000–$5,000"},{ic:"📋",nm:"Annual Oil & Compliance",cost:"SGD $3,000–$8,000 / yr"}].map((item,i,arr)=>(
                <div key={i} style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"5px"}}>
                  <div style={{width:"32px",height:"32px",borderRadius:"50%",background:"#1a0a06",border:"1px solid var(--red)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",flexShrink:0}}>{item.ic}</div>
                  <div style={{flex:1,background:"var(--card)",borderRadius:"4px",padding:"8px 12px"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"4px"}}>
                      <span style={{fontSize:"11px",color:"var(--text)",fontWeight:"500"}}>{item.nm}</span>
                      <span style={{fontFamily:"DM Mono",fontSize:"9px",color:"var(--red)"}}>{item.cost}</span>
                    </div>
                    {i<arr.length-1&&<div style={{fontFamily:"DM Mono",fontSize:"7px",color:"var(--gold)",letterSpacing:"1px",marginTop:"3px",textTransform:"uppercase"}}>↓ triggers next →</div>}
                  </div>
                </div>
              ))}
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",padding:"14px",background:"#1a0a08",border:"1px solid var(--red)",borderRadius:"4px",marginTop:"10px"}}>
                <span style={{fontFamily:"DM Mono",fontSize:"8px",color:"var(--red)",letterSpacing:"1px",textTransform:"uppercase"}}>True total cost — Year 1</span>
                <div style={{textAlign:"right"}}>
                  <span style={{fontFamily:"Playfair Display",fontSize:"26px",fontWeight:"900",color:"var(--red)"}}>SGD $25,000–$61,000</span>
                  <div style={{fontFamily:"DM Mono,monospace",fontSize:"6px",color:"#4a1a10",letterSpacing:"1px",marginTop:"2px"}}>APPROX. · INDICATIVE RANGE · VARIES BY MARKET</div>
                </div>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px",padding:"14px",background:"#0a1a0a",border:"1px solid var(--green)",borderRadius:"4px",marginTop:"7px"}}>
                <div>
                  <div style={{fontFamily:"DM Mono",fontSize:"8px",color:"var(--green)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:"2px"}}>Merrychef conneX12 SP — total installed</div>
                  <div style={{fontSize:"9px",color:"var(--muted)"}}>No hood · no suppression · no grease trap · no oil · ventless</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <span style={{fontFamily:"Playfair Display",fontSize:"26px",fontWeight:"900",color:"var(--green)"}}>SGD $9,500</span>
                  <div style={{fontFamily:"DM Mono,monospace",fontSize:"6px",color:"#2a4a2a",letterSpacing:"1px",marginTop:"2px"}}>APPROX. · 2026 SG MARKET</div>
                </div>
              </div>
            </div>
            <div style={{textAlign:"center",marginTop:"28px"}}><button className="btn" onClick={()=>nav("rec")}>Continue to Recipes →</button></div>
          </div>
        </div>

        <div className={`pg${ch==="rec"?" on":""}`}>
          {recipe===null?(
            <div className="wrap">
              <div className="ey">Part V — The Recipes</div>
              <h1 className="cht">The <em>Recipes.</em></h1>
              <p className="body">22 APAC recipes with full oven settings, accessories, and the science behind each profile. Developed on conneX12e (800W MW).</p>
              <input className="r-srch" type="text" placeholder="Search recipes..." value={srch} onChange={e=>setSrch(e.target.value)}/>
              <div className="cats">
                {CATS.map(c=><div key={c} className={`cp${cat===c?" on":""}`} onClick={()=>setCat(c)}>{c}</div>)}
              </div>
              <div className="r-grid">
                {visible.map(r=>(
                  <div key={r.id} className="rcard" onClick={()=>setRecipe(r)}>
                    <div className="rc-ill"><r.Illus/></div>
                    <div className="rc-body">
                      <div className="rc-cat">{r.cat}</div>
                      <div className="rc-nm">{r.name}</div>
                      <div className="rc-desc">{r.tagline}</div>
                      <div className="rc-s">
                        <span className="rs rs-t">{r.temp}</span>
                        <span className="rs rs-f">Fan {r.fan}</span>
                        <span className="rs rs-m">MW {r.mw}</span>
                        <span className="rs rs-i">{r.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {visible.length===0&&<div style={{gridColumn:"1/-1",textAlign:"center",padding:"48px",color:"var(--dim)",fontFamily:"DM Mono",fontSize:"10px",letterSpacing:"2px"}}>No recipes found</div>}
              </div>
            </div>
          ):(
            <div>
              <div className="rd-hero">
                <recipe.Illus/>
                <button className="btn-g" style={{position:"absolute",top:"14px",left:"14px",background:"#0d0c0a99"}} onClick={()=>setRecipe(null)}>← All Recipes</button>
                <div className="rd-ov">
                  <div className="rd-cat">{recipe.cat}</div>
                  <div className="rd-nm">{recipe.name}</div>
                  <div className="rd-tg">{recipe.tagline}</div>
                </div>
              </div>
              <div className="sbar">
                {[{ic:"🌡️",lb:"Temperature",vl:recipe.temp,c:"#e06030"},{ic:"⏱️",lb:"Cook Time",vl:recipe.time,c:"var(--green)"},{ic:"💨",lb:"Fan",vl:recipe.fan,c:"var(--gold)"},{ic:"📡",lb:"Microwave",vl:recipe.mw,c:"var(--blue)"}].map(s=>(
                  <div className="sb-bl" key={s.lb}><div className="sb-ic">{s.ic}</div><div className="sb-vl" style={{color:s.c}}>{s.vl}</div><div className="sb-lb">{s.lb}</div></div>
                ))}
                <div className="sb-bl" style={{flex:"1.5"}}>
                  <div className="sb-ic">🧺</div>
                  <div className="sb-vl" style={{fontSize:"11px",color:"var(--gold)"}}>{recipe.acc}</div>
                  <div className="sb-lb">Accessory</div>
                  {recipe.acc.toLowerCase().includes("optional")&&<div className="sb-su">Separate purchase</div>}
                </div>
              </div>
              <div className="rd-body">
                <div>
                  <div className="rd-se">Ingredients</div>
                  <ul className="ing-l">{recipe.ing.map((item,i)=><li key={i}>{item}</li>)}</ul>
                </div>
                <div>
                  <div className="rd-se">Method</div>
                  {recipe.steps.map((s,i)=><div className="st-it" key={i}><span className="st-n">{i+1}.</span><span className="st-t">{s}</span></div>)}
                </div>
                <div className="why"><div className="why-l">Why This Profile Works</div><div className="why-t">{recipe.why}</div></div>
              </div>
            </div>
          )}
        </div>

        <div className={`pg${ch==="calc"?" on":""}`}>
          <div className="wrap" style={{paddingBottom:0}}>
            <div className="ey">Appendix — Cross-Model Conversion</div>
            <h1 className="cht">Profile <em>Calculator.</em></h1>
            <p className="body">All recipes developed on conneX12e (800W MW). Enter any base profile to calculate the correct settings for SP, HP, and conneX16.</p>
          </div>
          <div className="calc-grid" style={{padding:"0 36px 36px"}}>
            <div className="calc-sb">
              <div style={{fontFamily:"DM Mono",fontSize:"7px",letterSpacing:"3px",color:"var(--dim)",textTransform:"uppercase",marginBottom:"14px"}}>Base: conneX12e · 800W Microwave</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"6px",marginBottom:"18px"}}>
                {Object.entries(MODELS).map(([k,m])=>(
                  <div key={k} style={{background:"#111008",borderRadius:"3px",padding:"8px",border:`1px solid ${k==="base"?m.color:"var(--border)"}`,textAlign:"center"}}>
                    <div style={{fontFamily:"DM Mono",fontSize:"7px",color:m.color,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"3px"}}>{m.label}</div>
                    <div style={{fontFamily:"Playfair Display",fontSize:"14px",fontWeight:"700",color:"var(--text)",lineHeight:"1"}}>{m.mw}W</div>
                  </div>
                ))}
              </div>
              {[{lb:"Temperature",val:cTemp,set:setCTemp,min:100,max:275,unit:"°C",c:"#e06030"},{lb:"Fan",val:cFan,set:setCFan,min:10,max:100,unit:"%",c:"var(--gold)"},{lb:"Microwave",val:cMW,set:setCMW,min:0,max:100,unit:"%",c:"var(--blue)"}].map(sl=>(
                <div className="sl-g" key={sl.lb}>
                  <div className="sl-h"><span className="sl-n">{sl.lb}</span><span className="sl-v" style={{color:sl.c}}>{sl.val}{sl.unit}</span></div>
                  <input type="range" min={sl.min} max={sl.max} value={sl.val} onChange={e=>sl.set(Number(e.target.value))} style={{"--c":sl.c,"--p":`${((sl.val-sl.min)/(sl.max-sl.min))*100}%`}}/>
                </div>
              ))}
              <div style={{marginBottom:"14px"}}>
                <div className="sl-n" style={{marginBottom:"6px"}}>Cook Time (MM : SS)</div>
                <div style={{display:"flex",gap:"7px",alignItems:"center"}}>
                  {[[cTM,setCTM,0,10,"MM"],[cTS,setCTS,0,59,"SS"]].map(([val,set,min,max,lbl],i)=>(
                    <div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"3px"}}>
                      <input type="number" min={min} max={max} value={val} onChange={e=>set(String(e.target.value).padStart(2,"0"))}
                        style={{background:"var(--card)",border:"1px solid var(--border)",borderRadius:"3px",color:"var(--text)",fontFamily:"DM Mono",fontSize:"13px",padding:"7px",width:"54px",textAlign:"center",outline:"none"}}/>
                      <div style={{fontFamily:"DM Mono",fontSize:"7px",color:"var(--dim)",letterSpacing:"1px"}}>{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="calc-out">
              <div style={{fontFamily:"DM Mono",fontSize:"7px",letterSpacing:"3px",color:"var(--gold)",textTransform:"uppercase",marginBottom:"12px"}}>Converted Profiles</div>
              <div style={{background:"var(--card)",border:"1px solid var(--border)",borderRadius:"4px",padding:"12px",marginBottom:"12px"}}>
                <div style={{fontFamily:"DM Mono",fontSize:"7px",color:"var(--dim)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:"8px"}}>Base — conneX12e / 800W</div>
                <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
                  {[{l:"Temp",v:`${cTemp}°C`,c:"#e06030"},{l:"Time",v:baseTime,c:"var(--green)"},{l:"Fan",v:`${cFan}%`,c:"var(--gold)"},{l:"MW",v:`${cMW}%`,c:"var(--blue)"}].map(s=>(
                    <div key={s.l} style={{background:"#111008",borderRadius:"3px",padding:"7px 10px",textAlign:"center"}}>
                      <div style={{fontFamily:"DM Mono",fontSize:"13px",color:s.c,fontWeight:"500"}}>{s.v}</div>
                      <div style={{fontFamily:"DM Mono",fontSize:"7px",color:"var(--dim)",letterSpacing:"1px",textTransform:"uppercase",marginTop:"2px"}}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              {["sp","hp","c16"].map(key=>{
                const m=MODELS[key];
                const res=convertProfile(cMW,baseTime,key);
                const mwChg=res.mw!==cMW, tChg=res.time!==baseTime;
                return <div key={key} className="res-card" style={{"--rc":m.color}}>
                  <div className="res-hd">
                    <div><div className="res-md">{m.label}</div><div className="res-sub">{m.mw}W MW · {m.total}kW total · {m.cavity}"×{m.cavity}" cavity</div></div>
                    <div className="res-bd">{key.toUpperCase()}</div>
                  </div>
                  <div className="res-body">
                    {[{ic:"🌡️",lb:"Temp",vl:`${cTemp}°C`,chg:false},{ic:"⏱️",lb:"Time",vl:res.time,old:baseTime,chg:tChg},{ic:"💨",lb:"Fan",vl:`${cFan}%`,chg:false},{ic:"📡",lb:"MW",vl:`${res.mw}%`,old:`${cMW}%`,chg:mwChg}].map(row=>(
                      <div className="res-row" key={row.lb}>
                        <span className="res-lb"><span style={{fontSize:"12px"}}>{row.ic}</span>{row.lb}</span>
                        <span style={{display:"flex",alignItems:"center",gap:"4px"}}>
                          {row.chg&&<span className="res-old">{row.old}</span>}
                          <span className="res-vl" style={{color:row.chg?m.color:"var(--dim)"}}>{row.vl}</span>
                          {!row.chg&&<span style={{fontFamily:"DM Mono",fontSize:"7px",color:"#2a2a20",letterSpacing:"1px"}}>unchanged</span>}
                        </span>
                      </div>
                    ))}
                    {cMW>0&&<div className="wt">✓ {res.watts}W delivered — same result as base model</div>}
                  </div>
                </div>;
              })}
              <div style={{fontFamily:"DM Mono",fontSize:"7px",color:"var(--dim)",letterSpacing:"1px",marginTop:"10px",lineHeight:"1.6"}}>Formula: New MW% = (Base MW% × 800W) ÷ Target MW · Fan and Temp unchanged · Time adjusted for conneX16 short cooks only</div>

              {/* CALCULATOR FINE PRINT */}
              <div style={{marginTop:"18px",padding:"14px 16px",background:"#0a0908",border:"1px solid #1e1c17",borderRadius:"4px"}}>
                <div style={{fontFamily:"DM Mono,monospace",fontSize:"7px",letterSpacing:"3px",color:"#3a3020",textTransform:"uppercase",marginBottom:"8px"}}>Pricing & Figures Disclaimer</div>
                <p style={{fontSize:"10px",color:"#3a3020",lineHeight:"1.7",marginBottom:"6px"}}>All equipment prices, installation costs and operational figures referenced in this book are <strong style={{color:"#4a4030"}}>indicative estimates only</strong>, based on publicly available market information at the time of writing (2026). They are provided solely as illustrative examples to support the systems thinking and financial modelling frameworks described in Part IV.</p>
                <p style={{fontSize:"10px",color:"#3a3020",lineHeight:"1.7",marginBottom:"6px"}}>Actual prices will vary and are subject to change without notice due to: <strong style={{color:"#4a4030"}}>currency fluctuation</strong> across APAC markets · <strong style={{color:"#4a4030"}}>import tariffs and duties</strong> by country · <strong style={{color:"#4a4030"}}>distributor margin variation</strong> · <strong style={{color:"#4a4030"}}>supply chain conditions</strong> · <strong style={{color:"#4a4030"}}>inflationary pressure</strong> · <strong style={{color:"#4a4030"}}>local regulatory compliance costs</strong>.</p>
                <p style={{fontSize:"10px",color:"#3a3020",lineHeight:"1.7",marginBottom:"8px"}}>This book is a <strong style={{color:"#4a4030"}}>thinking framework</strong>, not a price list. No purchasing decision should be made based solely on figures appearing in this publication.</p>
                <div style={{borderTop:"1px solid #1e1c17",paddingTop:"8px"}}>
                  <p style={{fontSize:"10px",color:"#c97c2a",lineHeight:"1.6"}}>For current, market-specific pricing: contact your authorised distributor or regional equipment specialist directly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
