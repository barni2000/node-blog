/**
 * Edit the article
 */

module.exports = function (req, res, next) {

  const text =`
  # Ab fieri nisi Ortygiam femina sed habitabile

  ## Hoc cernis defecta

  Lorem markdownum terrenae mihi arces sensit veniam lustrantem Thracesque nubes
  *densissima Finierat cadat* et Cipus: precor. Per ignes pater tecto morti capiti
  *Hecate* patruelibus dura: quae et inpia Iuno taurum nobis Nestora officio.
  Corpora solent. Tibi nisi, [quamquam ignes](http://invidit.org/sequentem),
  iamque, haut ut, ille culpae operum passisque longo aetas tamen et. Adspicit
  liberat subtexere, ille cultus genuisse; et artes procorum mortis urbs.

  1. Euagrum fraudem apte manu fide dubitor viso
  2. Medium est haec verecundo in quae sanguine
  3. Agrestum hoc miror obnoxius et
  4. Illuc fuerat

  Est vel vacuas dixit, hic venae superi, expositum vincula? Horamque postquam
  geminat, audito urbs praesentit effugies precantem. Vota piscosamque terra: tot
  libens cumque secundis marmoreum Pallas, sic Elide.

  ## Eryx utve arsit

  Silvae relinquit Proximus novitate: est: tamen aquila leonis Tyrrhena, deducere
  **unum** hunc: utque. In ramis annum rude spissatus dixit iacent humana
  aliquisque neganda, ipse. E iaculum Proserpina, aestu esset munus hic tibi
  Maenalon, insisto. Ad pendere levavit puto, moenia lacrimis deductus arma
  virginitatis accipe et armenta novas vectabantur. Certam lugebat aequoreae
  eodem.

  > Triptolemo necem crudelis Telamon formidine pedum quid Iove, stipe et? Eumolpo
  > dare. Tua quid decimo petite petiit corpore.

  ## Pectora vinoque obstet

  Possis pulveris, cui ait vel contigerat causa incomptis recurvo? Navit onerata,
  opes, hunc matrem nec rumpere concurretque bovem Cythereiadasque laevum certe e
  caeli, in! Ut dique extensus apertas grates ambiguo increpat locum, viginti
  pretioque.

    nodePiconet -= vci;
    file(targetOnly);
    record_platform(upnp);
    if (graphic < 5) {
        subnetStation += paper;
    } else {
        baseband_software(card_secondary);
        hit += error_port_wiki;
        chipsetLinuxMemory = speakers_visual_dma;
    }
    linuxFreeware -= sip_box_odbc(streaming, 1, memory(1)) *
            crossMultiplatformMpeg + view;

  Quamvis tellus, sanguine satis; ferum puer Iunonis virus iam me facit semina:
  **nuper**, quod longam. Ereptas cogamque precor
  [et](http://erat-traduxit.io/occupat) fugit; mihi pignus ungues sui paulatim
  Augustum. Ab fossae, cum amor luce deos, et nec ita [generosior rursus
  fugientibus](http://www.comites.com/peloro) vulnera sorores: enim iamque. Tibi
  *parte* nec.

  Venus candidus di quaerit **ursaeque de** supremo: cito sanguine ardua. Ebur et
  dona spernitque intrat questaque; cruor sine, Pisenore **ad strictis** ardet
  aedibus; in. Ille poenas *apte est aquas* arduus nomina [viscera
  mihi](http://www.faciem.net/in.html), est, est stirpi. Viae clausere indignantem
  Ulixem cunctos quae coloni circum me educta tibi Acrota, temeraria? Antra undas;
  terres erat, tulero, talibus, iamdudum.`

  res.render('new', {title: 'Edit Article', id: req.params.article_id, text: text});
};
