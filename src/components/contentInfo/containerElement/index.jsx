import { useGeneralContext } from '@/context/GeneralContext';
import React, { useEffect, useRef } from 'react'
import { styled } from 'styled-components';


const SContainerElement = styled.div`
    margin-top: 4rem;
    min-height: 100%; 
    padding-right: 4rem;
`

const ContainerElement = ({ children, name }) => {
    const { SetCurrentSection } = useGeneralContext();
    const componentRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Umbral de visibilidad (0.5 indica que al menos la mitad del componente esté en el viewport)
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    SetCurrentSection(name)
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, options);

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(componentRef.current);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <SContainerElement ref={componentRef} id={name}>
        {children}
    </SContainerElement>

}

export default ContainerElement
