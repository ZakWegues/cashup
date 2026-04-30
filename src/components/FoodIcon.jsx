const paths = {
  cake: (
    <>
      <rect x="3" y="21" width="26" height="8" rx="2" fill="#FFF0E6" stroke="#C9876A" strokeWidth="1.2"/>
      <rect x="6" y="14" width="20" height="7" rx="2" fill="#F4A7A0" stroke="#C9876A" strokeWidth="1.2"/>
      <rect x="10" y="9" width="12" height="5" rx="2" fill="#FFF0E6" stroke="#C9876A" strokeWidth="1.2"/>
      <path d="M10 11 Q12 13 14 11 Q16 13 18 11 Q20 13 22 11" fill="none" stroke="#F28C82" strokeWidth="1.2"/>
      <rect x="14.5" y="4.5" width="3" height="5" rx="1" fill="#F28C82" stroke="#C9876A" strokeWidth="0.8"/>
      <ellipse cx="16" cy="3.8" rx="1.4" ry="2" fill="#FFD166" stroke="#FFA033" strokeWidth="0.7"/>
      <rect x="7" y="23" width="3" height="1.2" rx="0.6" fill="#F28C82" transform="rotate(-20 7 23)"/>
      <rect x="14" y="24" width="3" height="1.2" rx="0.6" fill="#70BFAD" transform="rotate(15 14 24)"/>
      <rect x="21" y="23" width="3" height="1.2" rx="0.6" fill="#FFD166" transform="rotate(-10 21 23)"/>
    </>
  ),
  cupcake: (
    <>
      <path d="M10 17 L12 29 H20 L22 17 Z" fill="#D4956A" stroke="#A5643A" strokeWidth="1.1"/>
      <line x1="12.5" y1="17" x2="12" y2="29" stroke="#A5643A" strokeWidth="0.7" opacity="0.5"/>
      <line x1="14.5" y1="17" x2="14.2" y2="29" stroke="#A5643A" strokeWidth="0.7" opacity="0.5"/>
      <line x1="17.5" y1="17" x2="17.8" y2="29" stroke="#A5643A" strokeWidth="0.7" opacity="0.5"/>
      <line x1="19.5" y1="17" x2="20" y2="29" stroke="#A5643A" strokeWidth="0.7" opacity="0.5"/>
      <path d="M9 17 Q9 10 16 10 Q23 10 23 17 Z" fill="#F28C82" stroke="#C9635A" strokeWidth="1.1"/>
      <path d="M11 17 Q11 12 16 12 Q21 12 21 17" fill="#F4ACA6" stroke="none"/>
      <path d="M16 10 Q15 7 16 5 Q17 7 16 10" fill="#F28C82" stroke="#C9635A" strokeWidth="0.9"/>
      <circle cx="16" cy="4.5" r="2.2" fill="#E03030" stroke="#A01010" strokeWidth="0.8"/>
      <circle cx="15.2" cy="3.7" r="0.7" fill="rgba(255,255,255,0.6)" stroke="none"/>
    </>
  ),
  cookie: (
    <>
      <circle cx="16" cy="16" r="12" fill="#C8843C" stroke="#8B5A1E" strokeWidth="1.2"/>
      <circle cx="16" cy="16" r="9" fill="#D4975A" stroke="none"/>
      <path d="M8 10 Q9 9 10 10" fill="none" stroke="#8B5A1E" strokeWidth="0.8" opacity="0.5"/>
      <path d="M22 8 Q23 9 24 8" fill="none" stroke="#8B5A1E" strokeWidth="0.8" opacity="0.5"/>
      <circle cx="11.5" cy="13" r="2" fill="#3D1F00" stroke="#1A0A00" strokeWidth="0.5"/>
      <circle cx="18.5" cy="11.5" r="2" fill="#3D1F00" stroke="#1A0A00" strokeWidth="0.5"/>
      <circle cx="13.5" cy="20" r="2" fill="#3D1F00" stroke="#1A0A00" strokeWidth="0.5"/>
      <circle cx="20.5" cy="19" r="1.8" fill="#3D1F00" stroke="#1A0A00" strokeWidth="0.5"/>
      <circle cx="16" cy="15.5" r="1.8" fill="#3D1F00" stroke="#1A0A00" strokeWidth="0.5"/>
      <circle cx="11" cy="12.4" r="0.6" fill="rgba(255,255,255,0.3)" stroke="none"/>
      <circle cx="18" cy="10.9" r="0.6" fill="rgba(255,255,255,0.3)" stroke="none"/>
    </>
  ),
  donut: (
    <>
      <circle cx="16" cy="16" r="12.5" fill="#F2D4A6" stroke="#C9A05A" strokeWidth="1.2"/>
      <circle cx="16" cy="16" r="4.5" fill="#FAF4EE" stroke="#C9A05A" strokeWidth="1"/>
      <path d="M4 13 Q4.5 6 16 5 Q27.5 6 28 13 Q26 16 22 15 Q20 12 16 12 Q12 12 10 15 Q6 16 4 13 Z" fill="#F28C82" stroke="none"/>
      <path d="M8 9 Q12 7 16 7 Q20 7 24 9" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 15 Q10.5 18 9.5 18.5" fill="none" stroke="#F28C82" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 15 Q22.5 18 23 18.5" fill="none" stroke="#F28C82" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="10.5" y="8.5" width="2.5" height="1" rx="0.5" fill="#FFD166" transform="rotate(30 10.5 8.5)"/>
      <rect x="15" y="6.5" width="2.5" height="1" rx="0.5" fill="#70BFAD" transform="rotate(-20 15 6.5)"/>
      <rect x="19.5" y="7.5" width="2.5" height="1" rx="0.5" fill="#A87EE8" transform="rotate(45 19.5 7.5)"/>
      <rect x="22" y="10" width="2.5" height="1" rx="0.5" fill="#F28C82" transform="rotate(-10 22 10)"/>
      <rect x="8" y="11" width="2.5" height="1" rx="0.5" fill="#FF7A5A" transform="rotate(20 8 11)"/>
    </>
  ),
  brigadeiro: (
    <>
      <rect x="14.8" y="3" width="2.4" height="9" rx="1.2" fill="#E8C87A" stroke="#C9A033" strokeWidth="0.7"/>
      <ellipse cx="16" cy="24" rx="8" ry="3" fill="#C9A033" stroke="#8B6A00" strokeWidth="0.8"/>
      <line x1="9.5" y1="24" x2="10" y2="27" stroke="#8B6A00" strokeWidth="0.6" opacity="0.6"/>
      <line x1="16" y1="25" x2="16" y2="27.5" stroke="#8B6A00" strokeWidth="0.6" opacity="0.6"/>
      <line x1="22.5" y1="24" x2="22" y2="27" stroke="#8B6A00" strokeWidth="0.6" opacity="0.6"/>
      <circle cx="16" cy="18" r="9.5" fill="#5C2E00" stroke="#3A1500" strokeWidth="1.2"/>
      <ellipse cx="13" cy="13.5" rx="3.5" ry="2.5" fill="rgba(255,255,255,0.1)" stroke="none" transform="rotate(-25 13 13.5)"/>
      <circle cx="12" cy="15" r="1.2" fill="#E8C87A" stroke="#C9A033" strokeWidth="0.5"/>
      <circle cx="20" cy="15" r="1.2" fill="#E8C87A" stroke="#C9A033" strokeWidth="0.5"/>
      <circle cx="16" cy="12.5" r="1.2" fill="#E8C87A" stroke="#C9A033" strokeWidth="0.5"/>
      <circle cx="10.5" cy="21" r="1" fill="#E8C87A" stroke="#C9A033" strokeWidth="0.5"/>
      <circle cx="21.5" cy="21" r="1" fill="#E8C87A" stroke="#C9A033" strokeWidth="0.5"/>
      <circle cx="16" cy="24.5" r="1" fill="#E8C87A" stroke="#C9A033" strokeWidth="0.5"/>
      <circle cx="14" cy="18.5" r="0.9" fill="#D4A856" stroke="none"/>
      <circle cx="19" cy="19" r="0.9" fill="#D4A856" stroke="none"/>
    </>
  ),
  strawberry: (
    <>
      <path d="M16 7 Q13 3 9 5 Q12 8 16 7" fill="#3A8C3A" stroke="#1E5A1E" strokeWidth="0.8"/>
      <path d="M16 7 Q19 2 23 4 Q20 8 16 7" fill="#3A8C3A" stroke="#1E5A1E" strokeWidth="0.8"/>
      <path d="M16 7 Q16 2 16 1 Q15 4 16 7" fill="#3A8C3A" stroke="#1E5A1E" strokeWidth="0.8"/>
      <path d="M9 10 Q7 17 10 23 Q13 28 16 29 Q19 28 22 23 Q25 17 23 10 Q20 8 16 8 Q12 8 9 10 Z" fill="#E8302A" stroke="#A01010" strokeWidth="1.2"/>
      <path d="M10 12 Q8.5 18 11 23 Q9 18 11 12 Z" fill="rgba(255,255,255,0.15)" stroke="none"/>
      <ellipse cx="13" cy="15" rx="1" ry="1.3" fill="#FFE566" stroke="#C9A800" strokeWidth="0.4" transform="rotate(-10 13 15)"/>
      <ellipse cx="19" cy="14" rx="1" ry="1.3" fill="#FFE566" stroke="#C9A800" strokeWidth="0.4" transform="rotate(8 19 14)"/>
      <ellipse cx="16" cy="19.5" rx="1" ry="1.3" fill="#FFE566" stroke="#C9A800" strokeWidth="0.4"/>
      <ellipse cx="11.5" cy="21" rx="0.9" ry="1.2" fill="#FFE566" stroke="#C9A800" strokeWidth="0.4" transform="rotate(-5 11.5 21)"/>
      <ellipse cx="20.5" cy="20" rx="0.9" ry="1.2" fill="#FFE566" stroke="#C9A800" strokeWidth="0.4" transform="rotate(10 20.5 20)"/>
      <ellipse cx="14" cy="24" rx="0.9" ry="1.1" fill="#FFE566" stroke="#C9A800" strokeWidth="0.4"/>
      <ellipse cx="18" cy="24.5" rx="0.9" ry="1.1" fill="#FFE566" stroke="#C9A800" strokeWidth="0.4" transform="rotate(5 18 24.5)"/>
    </>
  ),
  chocolate: (
    <>
      <rect x="3" y="8" width="26" height="17" rx="3" fill="#6B3A1F" stroke="#3D1500" strokeWidth="1.2"/>
      <rect x="4.5" y="9.5" width="23" height="14" rx="2" fill="#7D4A28" stroke="none"/>
      <line x1="12" y1="9.5" x2="12" y2="23.5" stroke="#5C2E00" strokeWidth="1.2"/>
      <line x1="20" y1="9.5" x2="20" y2="23.5" stroke="#5C2E00" strokeWidth="1.2"/>
      <line x1="4.5" y1="16.5" x2="27.5" y2="16.5" stroke="#5C2E00" strokeWidth="1.2"/>
      <rect x="5.5" y="10.5" width="5.5" height="5" rx="1" fill="#9B6040" stroke="none"/>
      <rect x="13" y="10.5" width="6" height="5" rx="1" fill="#9B6040" stroke="none"/>
      <rect x="21" y="10.5" width="5.5" height="5" rx="1" fill="#9B6040" stroke="none"/>
      <rect x="5.5" y="17.5" width="5.5" height="5" rx="1" fill="#9B6040" stroke="none"/>
      <rect x="13" y="17.5" width="6" height="5" rx="1" fill="#9B6040" stroke="none"/>
      <rect x="21" y="17.5" width="5.5" height="5" rx="1" fill="#9B6040" stroke="none"/>
      <path d="M20 8 L24 5 L27 8" fill="#8B5020" stroke="#3D1500" strokeWidth="0.8"/>
    </>
  ),
  salgado: (
    <>
      <path d="M16 3 Q25 8 25 19 Q25 29 16 31 Q7 29 7 19 Q7 8 16 3 Z" fill="#D4A040" stroke="#8B6A00" strokeWidth="1.2"/>
      <path d="M10 25 Q13 30 16 31 Q19 30 22 25 Q19 27 16 27.5 Q13 27 10 25 Z" fill="#FFF0D0" stroke="#C9A033" strokeWidth="0.7"/>
      <path d="M13 6 Q10 10 9 16 Q9 10 14 5 Z" fill="rgba(255,255,255,0.25)" stroke="none"/>
      <path d="M9.5 22 Q9 26 10 28 Q12 30 16 31 Q20 30 22 28 Q23 26 22.5 22 Q20 25 16 25.5 Q12 25 9.5 22 Z" fill="#B8800A" stroke="none" opacity="0.6"/>
      <circle cx="16" cy="4.5" r="3" fill="#E8B450" stroke="#8B6A00" strokeWidth="0.9"/>
      <circle cx="15" cy="3.5" r="1" fill="rgba(255,255,255,0.4)" stroke="none"/>
    </>
  ),
  lemon: (
    <>
      <ellipse cx="16" cy="16" rx="12.5" ry="9" fill="#FFE042" stroke="#C9A800" strokeWidth="1.2"/>
      <ellipse cx="12" cy="12" rx="4" ry="3" fill="rgba(255,255,255,0.3)" stroke="none" transform="rotate(-20 12 12)"/>
      <ellipse cx="16" cy="16" rx="9" ry="6.5" fill="rgba(255,255,255,0.35)" stroke="none"/>
      <line x1="16" y1="9" x2="16" y2="23" stroke="rgba(200,160,0,0.45)" strokeWidth="1"/>
      <line x1="9" y1="12" x2="23" y2="20" stroke="rgba(200,160,0,0.45)" strokeWidth="1"/>
      <line x1="9" y1="20" x2="23" y2="12" stroke="rgba(200,160,0,0.45)" strokeWidth="1"/>
      <circle cx="12" cy="14" r="1" fill="rgba(255,220,0,0.6)" stroke="none"/>
      <circle cx="20" cy="14" r="1" fill="rgba(255,220,0,0.6)" stroke="none"/>
      <circle cx="16" cy="19" r="1" fill="rgba(255,220,0,0.6)" stroke="none"/>
      <path d="M3.5 16 Q2.5 14 3 11.5" fill="none" stroke="#C9A800" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M28.5 16 Q29.5 14 29 11.5" fill="none" stroke="#C9A800" strokeWidth="1.4" strokeLinecap="round"/>
    </>
  ),
};

export default function FoodIcon({ name, size = 36 }) {
  const icon = paths[name] || paths.cake;
  return (
    <div
      className="food-icon-wrap"
      data-icon={name}
      style={{ width: size, height: size, borderRadius: Math.round(size * 0.28) }}
    >
      <svg
        width={Math.round(size * 0.72)}
        height={Math.round(size * 0.72)}
        viewBox="0 0 32 32"
      >
        {icon}
      </svg>
    </div>
  );
}
