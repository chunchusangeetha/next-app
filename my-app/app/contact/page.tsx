'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');

  return (
    <form onSubmit={(e) => { e.preventDefault(); alert(name); }}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}
