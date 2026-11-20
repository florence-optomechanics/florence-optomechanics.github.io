// News items. Add a new item at the top (newest first is not required: they are sorted by date).
// Fields:
//   date   "YYYY-MM-DD"  (shown as "Mon YYYY")
//   title  plain text
//   text   optional; HTML allowed (e.g. links). Leave "" for a title-only item.
//   title_it, text_it, alt_it   Italian versions, used on the Italian pages (the English ones are used if missing)
//   image  optional; file in images/ (e.g. "images/my-figure.png"), with alt, width, height
// The News tab shows all items; the Home page shows the latest three.
window.NEWS = [
  {
    date: "2026-11-01",
    title: "Paper in Physical Review A: optical squeezing from levitated oscillators",
    title_it: "Articolo su Physical Review A: squeezing ottico da oscillatori levitati",
    text: 'Our paper showing simultaneous two-dimensional ground-state cooling of a levitated nanoparticle and the generation of optical squeezing has been published in Physical Review A. <a href="https://doi.org/10.1103/HMS3-YB2H">Read it</a>.',
    text_it: 'È stato pubblicato su Physical Review A il nostro articolo che mostra il raffreddamento simultaneo allo stato fondamentale, in due dimensioni, di una nanoparticella levitata e la generazione di squeezing ottico. <a href="https://doi.org/10.1103/HMS3-YB2H">Leggilo</a>.',
    image: "images/news_PRA_2026.png",
    alt: "Contour plot of a noise spectrum as a function of frequency in kilohertz and phase in radians, with blue regions of reduced noise",
    alt_it: "Grafico a curve di livello di uno spettro di rumore in funzione della frequenza in kilohertz e della fase in radianti, con regioni blu di rumore ridotto",
    width: 376,
    height: 372
  },
  {
    date: "2026-10-01",
    title: "Paper in Science: entanglement between a levitated nanoparticle and light",
    title_it: "Articolo su Science: entanglement tra una nanoparticella levitata e la luce",
    text: 'Cooling levitated nanoparticles to ultralow temperatures gives access to their quantum mechanical states, a platform for probing fundamental physics. In our paper in Science we generated entanglement between a macroscopic mechanical oscillator, a levitated nanoparticle, and a freely propagating optical field, at room temperature. Such entanglement could also be used to develop quantum sensing technologies. <a href="https://doi.org/10.1126/SCIENCE.AEH1375">Read it</a>.',
    text_it: 'Raffreddare nanoparticelle levitate a temperature ultrabasse dà accesso ai loro stati quantistici meccanici, una piattaforma per studiare la fisica fondamentale. Nel nostro articolo su Science abbiamo generato entanglement tra un oscillatore meccanico macroscopico, una nanoparticella levitata, e un campo ottico che si propaga liberamente, a temperatura ambiente. Un entanglement di questo tipo potrebbe essere usato anche per sviluppare tecnologie di sensing quantistico. <a href="https://doi.org/10.1126/SCIENCE.AEH1375">Leggilo</a>.',
    image: "images/news_science_2026.png",
    alt: "Diagram of the experiment: laser frequencies used for cooling and for squeezing and entanglement, and the optical setup with a levitated nanoparticle inside a cavity",
    alt_it: "Schema dell'esperimento: frequenze dei laser usate per il raffreddamento e per lo squeezing e l'entanglement, e apparato ottico con una nanoparticella levitata all'interno di una cavità",
    width: 648,
    height: 604
  },
  {
    date: "2026-11-11",
    title: "Our new website is online",
    title_it: "Il nostro nuovo sito è online",
    text: ""
  },
  {
    date: "2026-07-20",
    title: "New preprint: gravitational interaction between milligram oscillators",
    title_it: "Nuovo preprint: interazione gravitazionale tra oscillatori da un milligrammo",
    text: 'We present an ongoing experiment, in collaboration with INFN, to measure the gravitational force between milligram-scale oscillators. <a href="https://arxiv.org/abs/2607.18351">Read it on arXiv</a>.',
    text_it: 'Presentiamo un esperimento in corso, in collaborazione con l\'INFN, per misurare la forza gravitazionale tra oscillatori di massa dell\'ordine del milligrammo. <a href="https://arxiv.org/abs/2607.18351">Leggilo su arXiv</a>.',
    image: "images/grafiqo_1.png",
    alt: "Photograph of a circular microfabricated oscillator with a central disc; scale bar 5 mm",
    alt_it: "Fotografia di un oscillatore microfabbricato circolare con un disco centrale; barra di scala 5 mm",
    width: 509,
    height: 513
  }
];
