import { useState } from "react";  
  
const LOGO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/4QCgRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAWodpAAQAAAABAAAAbgAAAAAAAACQAAAAAQAAAJAAAAABMjAyNjowNDoxNSAxMjozMjozNgAAA6ABAAMAAAABAAEAAKACAAMAAAABBDgAAKADAAMAAAABBDgAAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAEsASwDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACv/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Af8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";  
  
const visas = [  
  { id: "usa", flag: "🇺🇸", name: "Estados Unidos", color: "#b22234" },  
  { id: "uk", flag: "🇬🇧", name: "Reino Unido", color: "#012169" },  
  { id: "canada", flag: "🇨🇦", name: "Canadá", color: "#cc0000" },  
  { id: "australia", flag: "🇦🇺", name: "Australia", color: "#00008b" },  
];  
  
const familyQuestion = {  
  id: "familia_destino",  
  label: "¿Tienes familiares o conocidos en ese país?",  
  weight: 10,  
  options: [  
    { label: "No tengo familia ni conocidos allá", val: 10 },  
    { label: "Tengo amigos o conocidos viviendo allá", val: 7 },  
    { label: "Tengo familiares lejanos (tíos, primos)", val: 4 },  
    { label: "Tengo familiares cercanos (padres, hijos, hermanos)", val: 1 },  
  ]  
};  
  
const baseQuestions = {  
  usa: [  
    { id: "trabajo", label: "¿Tienes empleo formal o negocio propio?", weight: 18, options: [{ label: "Sí, empleo formal con contrato", val: 18 }, { label: "Sí, negocio propio con ingresos", val: 14 }, { label: "Pensionado/Jubilado", val: 14 }, { label: "No tengo empleo actualmente", val: 0 }] },  
    { id: "ingresos", label: "¿Cuáles son tus ingresos mensuales aproximados?", weight: 14, options: [{ label: "Más de $5.000.000", val: 14 }, { label: "Entre $3.000.000 y $5.000.000", val: 11 }, { label: "Entre $1.500.000 y $3.000.000", val: 7 }, { label: "Menos de $1.500.000", val: 2 }] },  
    { id: "viajes", label: "¿Has viajado al exterior antes?", weight: 13, options: [{ label: "Sí, a varios países incluyendo Europa", val: 13 }, { label: "Sí, a países de América", val: 9 }, { label: "Sí, solo una vez", val: 6 }, { label: "Nunca he viajado al exterior", val: 1 }] },  
    { id: "visa_previa", label: "¿Tienes visa americana anterior o vigente?", weight: 13, options: [{ label: "Sí, tengo visa vigente", val: 13 }, { label: "Sí, tuve visa pero venció", val: 10 }, { label: "Nunca he aplicado", val: 4 }, { label: "Me negaron antes", val: 0 }] },  
    { id: "bienes", label: "¿Tienes bienes o propiedades en Colombia?", weight: 13, options: [{ label: "Sí, casa o apartamento propio", val: 13 }, { label: "Sí, vehículo y/o ahorros", val: 9 }, { label: "Arriendo y tengo ahorros", val: 6 }, { label: "No tengo bienes", val: 1 }] },  
    { id: "familia", label: "¿Tienes familia cercana en Colombia?", weight: 9, options: [{ label: "Sí, hijos menores y/o cónyuge aquí", val: 9 }, { label: "Sí, padres y hermanos aquí", val: 7 }, { label: "Poca familia en Colombia", val: 3 }, { label: "No tengo familia en Colombia", val: 1 }] },  
    { id: "antecedentes", label: "¿Tienes antecedentes judiciales?", weight: 10, options: [{ label: "No, ninguno", val: 10 }, { label: "Solo antecedentes menores", val: 3 }, { label: "Sí tengo antecedentes", val: 0 }] },  
  ],  
  uk: [  
    { id: "trabajo", label: "¿Tienes empleo formal o negocio propio?", weight: 18, options: [{ label: "Sí, empleo formal con contrato", val: 18 }, { label: "Sí, negocio propio con ingresos", val: 14 }, { label: "Pensionado/Jubilado", val: 14 }, { label: "No tengo empleo actualmente", val: 0 }] },  
    { id: "ingresos", label: "¿Cuáles son tus ingresos mensuales aproximados?", weight: 14, options: [{ label: "Más de $5.000.000", val: 14 }, { label: "Entre $3.000.000 y $5.000.000", val: 11 }, { label: "Entre $1.500.000 y $3.000.000", val: 7 }, { label: "Menos de $1.500.000", val: 2 }] },  
    { id: "viajes", label: "¿Has viajado al exterior antes?", weight: 13, options: [{ label: "Sí, tengo visa o visité EE.UU./Europa", val: 13 }, { label: "Sí, a países de América", val: 7 }, { label: "Sí, solo una vez", val: 4 }, { label: "Nunca he viajado", val: 1 }] },  
    { id: "extractos", label: "¿Cuánto tiempo llevas con tu cuenta bancaria activa?", weight: 13, options: [{ label: "Más de 2 años con movimientos regulares", val: 13 }, { label: "Entre 1 y 2 años", val: 9 }, { label: "Menos de 1 año", val: 3 }, { label: "No tengo cuenta bancaria", val: 0 }] },  
    { id: "bienes", label: "¿Tienes bienes o propiedades en Colombia?", weight: 13, options: [{ label: "Sí, casa o apartamento propio", val: 13 }, { label: "Sí, vehículo y/o ahorros", val: 9 }, { label: "Arriendo y tengo ahorros", val: 6 }, { label: "No tengo bienes", val: 1 }] },  
    { id: "motivo", label: "¿Cuál es el motivo de tu viaje?", weight: 9, options: [{ label: "Turismo claro y planificado", val: 9 }, { label: "Visita a familiares/amigos", val: 7 }, { label: "Eventos o negocios", val: 7 }, { label: "No tengo motivo claro aún", val: 1 }] },  
    { id: "antecedentes", label: "¿Tienes antecedentes judiciales?", weight: 10, options: [{ label: "No, ninguno", val: 10 }, { label: "Solo antecedentes menores", val: 2 }, { label: "Sí tengo antecedentes", val: 0 }] },  
  ],  
  canada: [  
    { id: "trabajo", label: "¿Tienes empleo formal o negocio propio?", weight: 16, options: [{ label: "Sí, empleo formal con contrato", val: 16 }, { label: "Sí, negocio propio con ingresos", val: 12 }, { label: "Pensionado/Jubilado", val: 12 }, { label: "No tengo empleo actualmente", val: 0 }] },  
    { id: "viajes_previos", label: "¿Has visitado Canadá, EE.UU. o Europa antes?", weight: 18, options: [{ label: "Sí, tengo visa o visité EE.UU. o Europa", val: 18 }, { label: "Sí, he viajado a otros países", val: 9 }, { label: "Solo he viajado en América Latina", val: 4 }, { label: "Nunca he viajado al exterior", val: 0 }] },  
    { id: "ingresos", label: "¿Cuáles son tus ingresos mensuales aproximados?", weight: 13, options: [{ label: "Más de $5.000.000", val: 13 }, { label: "Entre $3.000.000 y $5.000.000", val: 10 }, { label: "Entre $1.500.000 y $3.000.000", val: 6 }, { label: "Menos de $1.500.000", val: 1 }] },  
    { id: "bienes", label: "¿Tienes bienes o propiedades en Colombia?", weight: 13, options: [{ label: "Sí, casa o apartamento propio", val: 13 }, { label: "Sí, vehículo y/o ahorros", val: 9 }, { label: "Arriendo y tengo ahorros", val: 6 }, { label: "No tengo bienes", val: 1 }] },  
    { id: "motivo", label: "¿Cuál es el motivo de tu viaje a Canadá?", weight: 9, options: [{ label: "Turismo claro y planificado", val: 9 }, { label: "Visita a amigos", val: 6 }, { label: "Eventos o negocios", val: 7 }, { label: "No tengo motivo claro aún", val: 1 }] },  
    { id: "antecedentes", label: "¿Tienes antecedentes judiciales?", weight: 10, options: [{ label: "No, ninguno", val: 10 }, { label: "Solo antecedentes menores", val: 2 }, { label: "Sí tengo antecedentes", val: 0 }] },  
  ],  
  australia: [  
    { id: "trabajo", label: "¿Tienes empleo formal o negocio propio?", weight: 16, options: [{ label: "Sí, empleo formal con contrato", val: 16 }, { label: "Sí, negocio propio con ingresos", val: 12 }, { label: "Pensionado/Jubilado", val: 12 }, { label: "No tengo empleo actualmente", val: 0 }] },  
    { id: "ingresos", label: "¿Cuáles son tus ingresos mensuales aproximados?", weight: 13, options: [{ label: "Más de $5.000.000", val: 13 }, { label: "Entre $3.000.000 y $5.000.000", val: 10 }, { label: "Entre $1.500.000 y $3.000.000", val: 6 }, { label: "Menos de $1.500.000", val: 1 }] },  
    { id: "viajes", label: "¿Has viajado al exterior antes?", weight: 16, options: [{ label: "Sí, tengo visa o visité EE.UU./Europa/Asia", val: 16 }, { label: "Sí, a varios países de América", val: 9 }, { label: "Sí, solo una vez", val: 4 }, { label: "Nunca he viajado", val: 0 }] },  
    { id: "bienes", label: "¿Tienes bienes o propiedades en Colombia?", weight: 13, options: [{ label: "Sí, casa o apartamento propio", val: 13 }, { label: "Sí, vehículo y/o ahorros", val: 9 }, { label: "Arriendo y tengo ahorros", val: 6 }, { label: "No tengo bienes", val: 1 }] },  
    { id: "extractos", label: "¿Cuánto tiempo llevas con tu cuenta bancaria activa?", weight: 12, options: [{ label: "Más de 2 años con movimientos regulares", val: 12 }, { label: "Entre 1 y 2 años", val: 8 }, { label: "Menos de 1 año", val: 3 }, { label: "No tengo cuenta bancaria", val: 0 }] },  
    { id: "motivo", label: "¿Cuál es el motivo de tu viaje a Australia?", weight: 9, options: [{ label: "Turismo claro y planificado", val: 9 }, { label: "Visita a familiares/amigos", val: 6 }, { label: "Eventos o negocios", val: 7 }, { label: "No tengo motivo claro aún", val: 1 }] },  
    { id: "antecedentes", label: "¿Tienes antecedentes judiciales?", weight: 10, options: [{ label: "No, ninguno", val: 10 }, { label: "Solo antecedentes menores", val: 2 }, { label: "Sí tengo antecedentes", val: 0 }] },  
  ],  
};  
  
// Add family question to all visas  
const questions = Object.fromEntries(  
  Object.entries(baseQuestions).map(([key, qs]) => [key, [...qs, familyQuestion]])  
);  
  
function getResult(score) {  
  if (score >= 80) return {  
    level: "ALTO", color: "#2d7a3a", bg: "rgba(45,122,58,0.12)",  
    msg: "¡Tu perfil tiene muy buenas probabilidades! Con una documentación bien presentada, tienes excelentes chances de obtener tu visa.",  
    cta: "Con Good Passport, optimizamos cada documento para que tu expediente llegue impecable — como los que hemos tramitado con éxito."  
  };  
  if (score >= 60) return {  
    level: "MEDIO", color: "#b8860b", bg: "rgba(184,134,11,0.12)",  
    msg: "Tu perfil tiene posibilidades, pero hay aspectos que se pueden fortalecer significativamente con la estrategia correcta.",  
    cta: "Con Good Passport trabajamos tu perfil para fortalecer exactamente los puntos que los cónsules evalúan."  
  };  
  if (score >= 40) return {  
    level: "BAJO-MEDIO", color: "#cc5500", bg: "rgba(204,85,0,0.12)",  
    msg: "Tu perfil tiene retos importantes, pero no imposibles. Hemos obtenido visas para perfiles similares con la estrategia adecuada.",  
    cta: "Good Passport tiene experiencia con perfiles difíciles. Contáctanos antes de aplicar solo — una negativa mal manejada afecta futuros trámites."  
  };  
  return {  
    level: "DIFÍCIL", color: "#c0392b", bg: "rgba(192,57,43,0.12)",  
    msg: "Tu perfil tiene obstáculos importantes. Aplicar sin asesoría profesional aumenta el riesgo de negativa.",  
    cta: "Antes de aplicar, habla con Good Passport. Una negativa mal manejada complica todo lo que viene después."  
  };  
}  
  
export default function App() {  
  const [step, setStep] = useState("visa");  
  const [selectedVisa, setSelectedVisa] = useState(null);  
  const [answers, setAnswers] = useState({});  
  const [currentQ, setCurrentQ] = useState(0);  
  const [addedId, setAddedId] = useState(null);  
  
  const visa = visas.find(v => v.id === selectedVisa);  
  const qs = selectedVisa ? questions[selectedVisa] : [];  
  const q = qs[currentQ];  
  
  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);  
  const maxScore = qs.reduce((sum, q) => sum + q.weight, 0);  
  const pct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;  
  const result = getResult(pct);  
  
  const selectAnswer = (val, id) => {  
    setAddedId(id);  
    setAnswers(prev => ({ ...prev, [q.id]: val }));  
    setTimeout(() => {  
      setAddedId(null);  
      if (currentQ < qs.length - 1) {  
        setCurrentQ(c => c + 1);  
      } else {  
        setStep("result");  
      }  
    }, 350);  
  };  
  
  const reset = () => { setStep("visa"); setSelectedVisa(null); setAnswers({}); setCurrentQ(0); };  
  
  return (  
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh", background: "linear-gradient(160deg, #080810 0%, #12122a 60%, #080810 100%)" }}>  
      <style>{`  
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap');  
        * { box-sizing: border-box; margin: 0; padding: 0; }  
        .container { max-width: 500px; margin: 0 auto; padding: 20px 16px 48px; }  
        .header { text-align: center; padding: 28px 0 20px; }  
        .logo-img { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid #e8c97e; margin-bottom: 10px; }  
        .brand { font-family: 'Playfair Display', serif; color: #e8c97e; font-size: 22px; letter-spacing: 1px; }  
        .brand-sub { font-family: 'Lato', sans-serif; color: #8080a8; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin-top: 3px; }  
        .subtitle { font-family: 'Lato', sans-serif; color: #9090b8; font-size: 13px; margin-top: 12px; line-height: 1.6; }  
        .card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); border-radius: 20px; padding: 22px; backdrop-filter: blur(12px); }  
        .section-title { font-family: 'Playfair Display', serif; color: #e8c97e; font-size: 17px; text-align: center; margin-bottom: 18px; }  
        .visa-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }  
        .visa-btn { background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 18px 10px; cursor: pointer; text-align: center; transition: all 0.22s; }  
        .visa-btn:hover { background: rgba(232,201,126,0.1); border-color: rgba(232,201,126,0.5); transform: translateY(-2px); }  
        .visa-flag { font-size: 36px; display: block; margin-bottom: 7px; }  
        .visa-name { font-family: 'Lato', sans-serif; font-size: 13px; color: #c8c8e0; font-weight: 700; }  
        .progress-wrap { margin-bottom: 18px; }  
        .progress-bar { background: rgba(255,255,255,0.08); border-radius: 50px; height: 5px; overflow: hidden; }  
        .progress-fill { height: 100%; border-radius: 50px; background: linear-gradient(90deg, #e8c97e, #f5dfa0); transition: width 0.4s ease; }  
        .progress-text { font-family: 'Lato', sans-serif; font-size: 10px; color: #8080a0; text-align: right; margin-bottom: 6px; letter-spacing: 1px; }  
        .question { font-family: 'Playfair Display', serif; color: #e8e8ff; font-size: 16px; line-height: 1.55; margin-bottom: 18px; }  
        .options { display: flex; flex-direction: column; gap: 9px; }  
        .opt { background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.1); border-radius: 11px; padding: 13px 15px; cursor: pointer; font-family: 'Lato', sans-serif; font-size: 13px; color: #c8c8e0; text-align: left; transition: all 0.18s; line-height: 1.4; }  
        .opt:hover { background: rgba(232,201,126,0.1); border-color: rgba(232,201,126,0.4); color: #f0f0ff; }  
        .opt.chosen { background: rgba(232,201,126,0.18); border-color: #e8c97e; color: #e8c97e; }  
        .result-center { text-align: center; }  
        .r-flag { font-size: 44px; margin-bottom: 6px; }  
        .r-visaname { font-family: 'Lato', sans-serif; font-size: 11px; color: #8080a0; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 18px; }  
        .score-ring { width: 110px; height: 110px; border-radius: 50%; margin: 0 auto 14px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 3px solid; }  
        .score-num { font-family: 'Playfair Display', serif; font-size: 34px; font-weight: 700; }  
        .score-pct { font-family: 'Lato', sans-serif; font-size: 11px; margin-top: 1px; }  
        .r-level { font-family: 'Lato', sans-serif; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 14px; }  
        .r-msg { font-family: 'Lato', sans-serif; font-size: 13px; color: #b0b0c8; line-height: 1.7; margin-bottom: 14px; }  
        .cta-box { border-radius: 12px; padding: 14px; margin-bottom: 18px; border: 1px solid rgba(232,201,126,0.25); background: rgba(232,201,126,0.07); }  
        .cta-inner { font-family: 'Lato', sans-serif; font-size: 12px; color: #d8b870; line-height: 1.6; }  
        .cta-inner strong { display: block; font-size: 13px; margin-bottom: 3px; color: #e8c97e; }  
        .wa-btn { width: 100%; background: #25d366; border: none; border-radius: 11px; padding: 15px; font-family: 'Lato', sans-serif; font-weight: 700; font-size: 14px; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 9px; transition: all 0.2s; }  
        .wa-btn:hover { background: #1da851; transform: scale(1.02); }  
        .reset-btn { width: 100%; background: transparent; border: 1px solid rgba(255,255,255,0.15); border-radius: 11px; padding: 11px; font-family: 'Lato', sans-serif; font-size: 12px; color: #8080a0; cursor: pointer; transition: all 0.2s; }  
        .reset-btn:hover { border-color: #e8c97e; color: #e8c97e; }  
        .disclaimer { font-family: 'Lato', sans-serif; font-size: 10px; color: #505068; text-align: center; margin-top: 14px; line-height: 1.5; }  
        .back-btn { background: none; border: none; color: #8080a0; font-family: 'Lato', sans-serif; font-size: 11px; cursor: pointer; margin-bottom: 14px; display: flex; align-items: center; gap: 4px; padding: 0; }  
        .back-btn:hover { color: #e8c97e; }  
        .stats-row { display: flex; justify-content: center; gap: 20px; margin: 14px 0 20px; }  
        .stat { text-align: center; }  
        .stat-n { font-family: 'Playfair Display', serif; color: #e8c97e; font-size: 20px; }  
        .stat-l { font-family: 'Lato', sans-serif; color: #8080a0; font-size: 9px; letter-spacing: 1px; text-transform: uppercase; }  
      `}</style>  
  
      <div className="container">  
        <div className="header">  
          <img className="logo-img" src={LOGO} alt="Good Passport" />  
          <div className="brand">Good Passport</div>  
          <div className="brand-sub">🌍 Asesoría de visas</div>  
          {step === "visa" && (  
            <>  
              <div className="stats-row">  
                <div className="stat"><div className="stat-n">25+</div><div className="stat-l">casos</div></div>  
                <div className="stat"><div className="stat-n">96%</div><div className="stat-l">aprobadas</div></div>  
                <div className="stat"><div className="stat-n">4</div><div className="stat-l">países</div></div>  
              </div>  
              <p className="subtitle">Descubre en 2 minutos qué tan listo está tu perfil. Selecciona el país al que quieres viajar.</p>  
            </>  
          )}  
        </div>  
  
        {step === "visa" && (  
          <div className="card">  
            <div className="section-title">¿A dónde quieres viajar?</div>  
            <div className="visa-grid">  
              {visas.map(v => (  
                <button key={v.id} className="visa-btn"  
                  onClick={() => { setSelectedVisa(v.id); setStep("questions"); setCurrentQ(0); setAnswers({}); }}>  
                  <span className="visa-flag">{v.flag}</span>  
                  <span className="visa-name">{v.name}</span>  
                </button>  
              ))}  
            </div>  
          </div>  
        )}  
  
        {step === "questions" && q && (  
          <div className="card">  
            <button className="back-btn" onClick={() => setStep("visa")}>← Cambiar destino</button>  
            <div className="progress-wrap">  
              <div className="progress-text">Pregunta {currentQ + 1} de {qs.length}</div>  
              <div className="progress-bar">  
                <div className="progress-fill" style={{ width: `${(currentQ / qs.length) * 100}%` }} />  
              </div>  
            </div>  
            <div className="question">{q.label}</div>  
            <div className="options">  
              {q.options.map((opt, i) => (  
                <button key={i}  
                  className={`opt ${addedId === i ? "chosen" : ""}`}  
                  onClick={() => selectAnswer(opt.val, i)}>  
                  {opt.label}  
                </button>  
              ))}  
            </div>  
          </div>  
        )}  
  
        {step === "result" && (  
          <div className="card result-center">  
            <div className="r-flag">{visa?.flag}</div>  
            <div className="r-visaname">Visa {visa?.name}</div>  
            <div className="score-ring" style={{ borderColor: result.color, color: result.color }}>  
              <span className="score-num">{pct}%</span>  
              <span className="score-pct">probabilidad</span>  
            </div>  
            <div className="r-level" style={{ color: result.color }}>Perfil {result.level}</div>  
            <div className="r-msg">{result.msg}</div>  
            <div className="cta-box">  
              <div className="cta-inner">  
                <strong>💼 Good Passport puede ayudarte</strong>  
                {result.cta}  
              </div>  
            </div>  
            <button className="wa-btn">💬 Hablar con Good Passport por WhatsApp</button>  
            <button className="reset-btn" onClick={reset}>↩ Evaluar otra visa</button>  
            <div className="disclaimer">  
              * Esta calculadora es orientativa y no garantiza resultados. La decisión final siempre corresponde al cónsul. Good Passport no es entidad oficial.  
            </div>  
          </div>  
        )}  
      </div>  
    </div>  
  );  
}  
