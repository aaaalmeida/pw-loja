import { ReactNode } from "react"
import SectionTitle from "./SectionTitle"

interface IPage {
    children: ReactNode | ReactNode[]
    title?: string
}

const FlexWrapper = ({ children, title }: IPage) => {
    const renderChildrenContent = Array.isArray(children) ? children : [children]
    const length = renderChildrenContent.length

    return (
        <>
            {title && <SectionTitle title={title} />}
            <div className="my-4 flex justify-evenly">
                {renderChildrenContent.map((child, index) => (
                    <div key={index} className={`w-1/${length} px-4`}>
                        {child}
                    </div>
                ))}
            </div>
        </>
    )
}

export default FlexWrapper