import React from 'react';
import classNames from "classnames";

export function Overlay({ className, active, onClick }:{ className?:string, active?:boolean, onClick?: () => void }){

    return(
        <div 
            className={
                classNames([
                    `absolute top-0 left-0 min-h-full w-full transition ease z-0 bg-black`,
                    active && 'animate-overlay-active',
                    className,
                ])
            }
            onClick={ onClick }
        />

    )
}