import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import style from "./styles.module.scss"
import { Slider } from "./slyder_components/sliders"
import { Slider_views} from "./slider_views/slider_views"
import relaxamento from "../assets/massagem-pedras-quentes.jpg"
import acupuntura from "../assets/acupuntura6.jpg"
import ventosa from "../assets/terapia-de-ventosa.jpg"

import { MutableRefObject } from "react"


function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }


    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function SliderKeen() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slides: {
        perView: 3,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef),
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = true
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 3000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = true
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
    ]
  )

  return (
    <>
      <div ref={ sliderRef } className={ `${"keen-slider"} ${style.keen_slider_container}` }>
        <div className={`${"keen-slider__slide"} ${"number-slide1"}`}>
          <Slider title="BEM ESTAR O TEMPOR TODO" content="Relaxe, renove-se, renasça" message="MASSAGEM TERAPÊUTICA RESTAURADORA" image={ acupuntura } />
        </div>

        <div className={`${"keen-slider__slide"} ${"number-slide2"}`}>
          <Slider title="BOA SAÚDE É O BEM MAIS VALIOSO" content="Viva sem tensão durante o dia com a acupuntura" message="Esperar ter sede para cavar um poço pode ser tarde demais" image={ acupuntura } />
        </div>

        <div className={`${"keen-slider__slide"} ${"number-slide3"}`}>
          <Slider title="LIBERTE-SE DA DOR" content="Viva melhor com a técnica ventosaterapia" message="Ventosaterapia destacam-se a melhora da circulação sanguínea e linfática, alívio da dor muscular, redução do estresse e ansiedade, diminuição da celulite e melhora da aparência da pele." image={ acupuntura } />
        </div>

        <div className={`${"keen-slider__slide"} ${"number-slide4"}`}>
          <Slider title="LIBERTE SUA MENTE E SEJA FELIZ" content="Equilíbrios emocionais e mentais com terapia Florais de Bach." message="Cada essência floral é destinada a tratar um aspecto emocional particular, como medo, ansiedade, tristeza, raiva ou falta de confiança." image={ acupuntura } />
        </div>

        <div className={`${"keen-slider__slide"} ${"number-slide5"}`}>
          <Slider title="RELAXE SEU CORPO TODO" content="A reflexologia é indicada para complementar o tratamento de:" message="teste" image={ acupuntura } />
        </div>
        <div className={`${"keen-slider__slide"} ${"number-slide6"}`}>
          <Slider title="LIBERTE SUA MENTE E SEJA FELIZ" content="Equilíbrios emocionais e mentais com terapia Florais de Bach." message="Cada essência floral é destinada a tratar um aspecto emocional particular, como medo, ansiedade, tristeza, raiva ou falta de confiança." image={ acupuntura } />
        </div>
      </div>

      <div ref={ thumbnailRef } className={`${"keen-slider"} ${style.thumbnail}`}>
        <div className={`${"keen-slider__slide"} ${style.number_slide}`}>
          <Slider_views title="Massagem terapéutica"/>
        </div>
        <div className={`${"keen-slider__slide"} ${style.number_slide}`}>
          <Slider_views title="Acupuntura"/>
        </div>
        <div className={`${"keen-slider__slide"} ${style.number_slide}`}>
          <Slider_views title="Terapia de ventosa"/>
        </div>
        <div className={`${"keen-slider__slide"} ${style.number_slide}`}>
          <Slider_views title="Terapias de florais"/>
        </div>
        <div className={`${"keen-slider__slide"} ${style.number_slide}`}>
          <Slider_views title="Terapias de florais"/>
        </div>
        <div className={`${"keen-slider__slide"} ${style.number_slide}`}>
          <Slider_views title="Terapias de florais" />
        </div>
      </div>
    </>
  )
}
