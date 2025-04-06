export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
      <div className="text-center text-gray-400">
        © {new Date().getFullYear()} SaasDigital. Todos os direitos reservados.
      </div>
    </footer>
  );
} 