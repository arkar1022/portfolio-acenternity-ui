"use client;"
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/constant';
const Grid = () => {
    return(
        <section id="about">
            <BentoGrid className="w-full py-20">
                {
                gridItems.map(({id,title,className,img,description,imgClassName,titleClassName,spareImg}) => (
                    <BentoGridItem  id={id} key={id} title={title} className={className} img={img} imgClassName={imgClassName} titleClassName={titleClassName} spareImg={spareImg} description={description}/>
                ))
                }
            </BentoGrid>
        </section>
    )
}
export default Grid;