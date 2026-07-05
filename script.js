function mesaj(e){
  e.preventDefault();
  alert('Mesajınız alındı. En kısa sürede dönüş yapılacaktır.');
}

function randevu(e){
  e.preventDefault();
  const form = e.target;
  const hizmet = form.querySelector('select')?.value || '';
  const inputs = form.querySelectorAll('input');
  const adSoyad = inputs[0]?.value || '';
  const telefon = inputs[1]?.value || '';
  const tarih = inputs[2]?.value || '';
  const not = form.querySelector('textarea')?.value || '';

  if(!hizmet || hizmet === 'Hizmet Seçin'){
    alert('Lütfen hizmet seçin.');
    return;
  }

  const mesajMetni = `Merhaba, randevu almak istiyorum.%0A%0AHizmet: ${hizmet}%0AAd Soyad: ${adSoyad}%0ATelefon: ${telefon}%0ATarih: ${tarih}%0ANot: ${not || '-'}`;
  const adminNo = '905520227373';
  window.open(`https://wa.me/${adminNo}?text=${mesajMetni}`, '_blank');
}

document.querySelectorAll('section,.service,.contact-card,.feature,.reservation,.panel').forEach(el=>el.classList.add('reveal'));
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
