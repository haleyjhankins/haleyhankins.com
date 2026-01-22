const $ = (sel, root = document) => root.querySelector(sel)
    const yearEl = $('#year')
    if (yearEl) yearEl.textContent = new Date().getFullYear()

    const menuBtn = $('#menuBtn')
    const overlay = $('#overlay')
    const toggleMenu = () => overlay.classList.toggle('hidden')
    menuBtn.addEventListener('click', toggleMenu)
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) toggleMenu()
    })
    overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', toggleMenu))

    // Subtle parallax motion for hero background
    const heroBg = document.getElementById('heroBg')
    if (heroBg) {
      window.addEventListener('mousemove', (e) => {
        const { innerWidth, innerHeight } = window
        const x = (e.clientX / innerWidth - 0.5) * 18
        const y = (e.clientY / innerHeight - 0.5) * 18
        heroBg.style.transform = `translate(${x}px, ${y}px) scale(1.08)`
      })
    }

    // Hover effect for head tag message
    const headTagFigure = document.querySelector('figure:has(img[src*="haley-braces"])')
    const headTagSpan = document.getElementById('head-tag-span')
    if (headTagFigure && headTagSpan) {
      headTagFigure.addEventListener('mouseenter', () => {
        headTagSpan.style.opacity = '1'
        headTagSpan.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
      })
      headTagFigure.addEventListener('mouseleave', () => {
        headTagSpan.style.opacity = '0'
        headTagSpan.style.backgroundColor = 'transparent'
      })
    }

    // Marquee loop duplication
    const marqueeTrack = document.querySelector('.marquee-track')
    if (marqueeTrack) {
      const firstItem = marqueeTrack.children[0]
      if (firstItem) {
        const clone = firstItem.cloneNode(true)
        marqueeTrack.appendChild(clone)
      }
    }