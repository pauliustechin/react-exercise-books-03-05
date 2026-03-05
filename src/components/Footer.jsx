const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer id="footer" className="bg-slate-700 font-bold text-white p-5 rounded mb-[0%]">
      <p>Paulius Semaška {year}</p>
    </footer>
  )
}

export default Footer