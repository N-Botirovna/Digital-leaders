import { useParams } from 'react-router-dom';

function LeaderDetail() {
  const { id } = useParams(); // URL'dan id parametrini olish

  // API orqali ma'lumot olish va id'ga asoslanib sahifani ko'rsatish
  return (
    <div>
      <h1>Leader Detail for ID: {id}</h1>
      {/* Bu yerda id ga asoslanib ma'lumot ko'rsatiladi */}
    </div>
  );
}

export default LeaderDetail;


