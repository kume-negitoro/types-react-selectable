import React from 'react'

declare module 'react-selectable' {
    export interface Props {
        onSelection: () => void
        onNonItemClick: () => void
        tolerance: number
        component: string
        fixedPosition: boolean
        selectOnMouseMove: boolean
        preventDefault: boolean
        enabled: boolean
    }
    export const createSelectable: (cls: any) => any
    export class SelectableGroup extends React.Component<Partial<Props>> {}
}

