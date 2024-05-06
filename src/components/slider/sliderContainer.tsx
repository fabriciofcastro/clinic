import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import style from "./styles.module.scss"
import { Slider_1 } from "./slyder_components/01/sliders"
import { Slider_views, Slider_views2, Slider_views3, Slider_views4 } from "./slider_views/slider_views"
import { Slider_2 } from "./slyder_components/02/sliders"
import { Slider_3 } from "./slyder_components/03/sliders"
import { Slider_4 } from "./slyder_components/04/sliders"

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
      mainRef.current.on("animationStarted", (main: any) => {
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
        perView: 4,
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
          mouseOver = false
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
      <div ref={ sliderRef } className={`${"keen-slider"} ${style.keen_slider__container}`}>
        <div className={`${"keen-slider__slide"} ${"number-slide1"}`}>
          <Slider_1 />
        </div>
        <div className={`${"keen-slider__slide"} ${"number-slide2"}`}>
        <Slider_2 />
        </div>
        <div className={`${"keen-slider__slide"} ${"number-slide3"}`}>
          <Slider_3 />
        </div>
        <div className={`${"keen-slider__slide"} ${"number-slide4"}`}>
          <Slider_4 />
        </div>
        <div className={`${"keen-slider__slide"} ${"number-slide5"}`}>5</div>
        <div className={`${"keen-slider__slide"} ${"number-slide6"}`}>6</div>
      </div>

      <div ref={ thumbnailRef } className={`${"keen-slider"} ${style.thumbnail}`}>
        <div className={`${"keen-slider__slide"} ${style.number_slide}`}>
          <Slider_views />
        </div>
        <div className={`${"keen-slider__slide"} ${style.number_slide}`}>
          <Slider_views2 />
        </div>
        <div className={`${"keen-slider__slide"} ${style.number_slide}`}>
          <Slider_views3 />
        </div>
        <div className={`${"keen-slider__slide"} ${style.number_slide}`}>
          <Slider_views4 />
        </div>
        <div className={`${"keen-slider__slide"} ${style.number_slide}`}>5</div>
        <div className={`${"keen-slider__slide"} ${style.number_slide}`}>6</div>
      </div>
    </>
  )
}
