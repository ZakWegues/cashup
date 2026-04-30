import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 650);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`} aria-hidden={hidden}>
      <div className="loader-mark" />
    </div>
  );
}
