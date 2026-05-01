

// 1. Referencias a las pantallas
const pantallaInicial = document.getElementById('pantalla-inicial');
const botonEntrar = document.getElementById('boton-entrar');
const elResto = document.getElementById('el-resto');

// 2. Función para saltar a la carta
botonEntrar.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Difuminamos la pantalla de Tata
    pantallaInicial.style.opacity = "0";
    pantallaInicial.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
        pantallaInicial.classList.add('hidden'); // La ocultamos completamente
        elResto.classList.remove('hidden');    // Mostramos el sobre
        
        // Opcional: Podrías disparar un sonido o efecto aquí
    }, 800);
});

// --- AQUÍ SIGUE EL RESTO DE TU CÓDIGO ANTERIOR ---
// (Lo de abrir el sobre, el menú de flores, etc.)// Seleccionamos todos los elementos necesarios
const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
const fase2 = document.getElementById('fase2');
const fase3 = document.getElementById('fase3');
const modal = document.getElementById('contenido-final');
const innerContent = document.getElementById('inner-content');
const closeModal = document.getElementById('closeModal');

// 1. Abrir el sobre
envelope.addEventListener('click', () => {
    envelope.classList.add('open');
});

// 2. Al hacer clic en la carta, pasar a la Fase 2 (Mensaje)
letter.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que se cierre el sobre por error
    envelope.style.opacity = "0";
    setTimeout(() => {
        envelope.parentElement.classList.add('hidden');
        fase2.classList.remove('hidden');
    }, 800);
});

// 3. De Fase 2 a Fase 3 (Menú de opciones)
fase2.addEventListener('click', () => {
    fase2.style.opacity = "0";
    setTimeout(() => {
        fase2.classList.add('hidden');
        fase3.classList.remove('hidden');
    }, 800);
});

// 4. Lógica de las 3 opciones del menú
document.getElementById('btnCarta').addEventListener('click', () => {
    abrirModal(`
        <h2 class="cursiva">Mi mensaje para ti</h2>
        <p style="font-size: 1.2rem; line-height: 1.6;">
            Aquí va todo tu texto de cumpleaños... <br><br>
            ¡Eres una persona increíble y me siento feliz de celebrar este día contigo!
        </p>
    `);
});

document.getElementById('btnGirasol').addEventListener('click', () => {
    abrirModal(`
        <h2 class="cursiva">Para mi girasol favorito</h2>
        <div style="text-align:center;">
            <img src="https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=500" style="width:100%; max-width:400px; border-radius:15px;">
            <p>Me recuerdas a los girasoles porque siempre buscas la luz, porque eres vibrante y porque... [tus razones]</p>
        </div>
    `);
});

document.getElementById('btnVinilo').addEventListener('click', () => {
    abrirModal(`
        <h2 class="cursiva">Nuestra Canción</h2>
        <div style="text-align:center;">
            <div class="icon disco-animado">💿</div>
            <p>Esta canción me recuerda a nuestros mejores momentos.</p>
            <iframe src="https://open.spotify.com/embed/track/TU_ID_AQUI" width="100%" height="80" frameBorder="0" allow="encrypted-media"></iframe>
        </div>
        <div class="galeria" style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:20px;">
            <img src="FOTO1.jpg" style="width:100%; border-radius:10px;">
            <img src="FOTO2.jpg" style="width:100%; border-radius:10px;">
        </div>
    `);
});

// Funciones para el Modal
function abrirModal(html) {
    innerContent.innerHTML = html;
    modal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// ... (mantenemos el código anterior para abrir el sobre y pasar a Fase 2) ...

// De Fase 2 a Fase 3 (Menú de opciones)
fase2.addEventListener('click', () => {
    fase2.style.opacity = "0";
    setTimeout(() => {
        fase2.classList.add('hidden');
        fase3.classList.remove('hidden');
    }, 800);
});

// Lógica de las 3 opciones del menú (adaptado con los nuevos IDs de botones)
document.getElementById('btnCarta').addEventListener('click', () => {
    abrirModal(`
        <h2 class="cursiva">Mi mensaje para ti</h2>
        <p style="font-size: 1.2rem; line-height: 1.6; color: #333;">
            ¡Feliz cumpleaños! Eres la mejor amiga que podría pedir... <br><br>
            [Tu mensaje de cumpleaños aquí...]
        </p>
    `);
});

document.getElementById('btnGirasol').addEventListener('click', () => {
    // Al hacer clic en flores, mostramos el ramo y el mensaje
    abrirModal(`
        <h2 class="cursiva">Un detalle para ti</h2>
        <div style="text-align:center;">
            <img src="ramo_completo.png" style="width:100%; max-width:400px; border-radius:15px;">
            <p style="color: #333;">Este ramo me recuerda a ti porque...</p>
        </div>
    `);
});

document.getElementById('btnVinilo').addEventListener('click', () => {
    // Al hacer clic en pastel, mostramos la opción de música
    abrirModal(`
        <h2 class="cursiva">Nuestra Canción</h2>
        <div style="text-align:center;">
            <p style="color: #333;">Para acompañar el pastel de cumpleaños, una canción especial:</p>
            <p>🎵 [Aquí cargarás tu canción después] 🎵</p>
        </div>
    `);
});

// ... (mantenemos las funciones para abrir y cerrar el Modal) ...