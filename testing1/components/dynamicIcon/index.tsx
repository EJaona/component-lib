import React, { ComponentPropsWithRef, Ref, forwardRef, useEffect, useState } from 'react';
import classNames from "classnames"
import iconsList from './icons.js'
import type {regular, solids, logos} from './types.js'


export type iconsListType = regular[number] | solids[number] | logos[number]

export type iconProps = ComponentPropsWithRef<'i'> & {
    name: iconsListType
}

type regularIcon = {
    name: regular[number]
}
type solidIcons = {
    name: solids[number]
}
type logoIcons = {
    name: logos[number]
}

interface IconsJsonFile {
    iconsList:{
        regular:regularIcon[], 
        solid:solidIcons[], 
        logo:logoIcons[]
    }
}

type normalizedIconType = {
    name:regularIcon['name'] | solidIcons['name'] | logoIcons['name']
    iconName:string
}


export const Icon = forwardRef(({ name, className, ...props }:iconProps, ref:Ref<HTMLElement>) => {

    const [icon, setIcon] = useState<normalizedIconType|null|undefined>(null)
    
    useEffect(() => {
        setIcon(findIcon(name))
    },[])
    
    if(!icon) return <i {...props} ref={ref} className={`bx bx-question-mark`}/>
        
    return <i {...props} ref={ref} className={classNames([icon.iconName, className])}/>
    
})


function getIcons(){

    const {iconsList:{logo, regular, solid}} = iconsList as IconsJsonFile
    let availableIcons:normalizedIconType[] = []

    logo.map((icon) => {
        availableIcons.push(
            { 
                name: icon.name,
                iconName:`bx bxl-${String(icon.name)}`
            }
        )
    })

    regular.map((icon) => {
        availableIcons.push(
            { 
                name: icon.name,
                iconName: `bx bx-${String(icon.name)}`
            }
        )
    })

    solid.map((icon) => {
        availableIcons.push(
            { 
                name: icon.name,
                iconName: `bx bxs-${String(icon.name)}`
            }
        )
    })

    return availableIcons 
}

function findIcon(name:string) {

    try{

        const availableIcons = getIcons()

        const getRequestedIcons = () => {

            const requestedIconFound = availableIcons.find( (icon:normalizedIconType) => icon.name === name.toLowerCase())
            return requestedIconFound
            
        }
    
        return getRequestedIcons()

    }catch(err){
        console.error(err)
        return null
    }
}