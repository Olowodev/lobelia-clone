import styles from './Carousel.module.css'
import { useEffect, useRef, useState } from 'react';

const Carousel = (props: any) => {
    const [state, setState] = useState<any>({
        isDown: false,
        startX: null,
        transLeftOffset: null,
        dragSpeed: props.dragSpeed
    })
    const [pageX, setPageX] = useState<any>()
    // const [isDown, setIsDown] = useState(false)
    // const [startX, setStartX] = useState(null)
    // const [dragSpeed, setDragSpeed] = useState(props.dragSpeed)
    // const [transLeftOffset, setTransLeftOffset] = useState(null)

    const cRef = useRef<HTMLDivElement>(null)
    const cWrapperStyle = {
        width: `${props._data.length * (props.itemWidth + (2 * props.itemSideOffsets))}px`,
        height: `${props.itemHeight}px`
    }
    const getMeIntValOf = (el: any) => {
        return parseInt(el.replace('translateX(', '').replace('px)',''), 10)
    }

    const handleSnap = () => {
        const {_data, itemWidth, itemSideOffsets} = props
        const carousel = cRef.current

        setState({isDown: false})
        carousel?.classList.remove('active')

        const tempThresholdOffset = getMeIntValOf(carousel?.firstChild?.style.transform)
        const end = carousel?.offsetWidth && _data.length * (itemWidth + (2 * itemSideOffsets)) - 30 - carousel?.offsetWidth

        if (tempThresholdOffset < 0 || end && tempThresholdOffset > end) {
            setState({isDown: false})
            carousel.firstChild.style.cssText = `
                transform: translateX(${ tempThresholdOffset < 0 ? 0 : end}px);
                transition: transform 0.5s cubic-beizer(.25,.72,.51,.96);
            `;
        }
    }

    const handleMouseDown = (e: any) => {
        const carousel = cRef.current

        e.persist()
        carousel?.classList.add('active')

        const _startX = carousel?.offsetLeft && e.pageX - carousel?.offsetLeft
        const _transLeftOffset = getMeIntValOf(carousel?.firstChild?.style.transform)
        console.log(carousel?.firstChild?.style)
        setPageX(e.pageX)
        setState({
            isDown: true,
            startX: _startX,
            transLeftOffset: _transLeftOffset
        })
    }

    const handleMouseLeave = () => {
        handleSnap()
    }

    const handleMouseUp = () => {
        handleSnap()
    }

    const handleMouseMove = (e: any) => {
        const { isDown, startX, transLeftOffset, dragSpeed} = state
        const carousel = cRef.current

        if (isDown) return
        e.preventDefault()

        const x = carousel?.offsetLeft && e.pageX - carousel?.offsetLeft
        const walk = x && (x - startX) * dragSpeed

        carousel.firstChild.style.transform = `translateX(${transLeftOffset + walk}px)`;
    }

    useEffect(()=> {
        const {startX, transLeftOffset, dragSpeed} = state
        const carousel = cRef.current

        const x = carousel?.offsetLeft && pageX - carousel?.offsetLeft
        const walk = x && (x - startX) * dragSpeed

        carousel.firstChild.style.cssText = `
            transform: translateX(${transLeftOffset + walk}px);
            transition: transform 0.0s ease-in-out;
        `;
    }, [state])
    return (
        <div
            className={styles.carousel}
            ref={cRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}>
            <div
                className={styles.cWrapper}
                style={{
                    ...cWrapperStyle,
                    transform: 'translateX(0px)'
                }}>
                    {props.children}
            </div>
        </div>
    );
}

export default Carousel;