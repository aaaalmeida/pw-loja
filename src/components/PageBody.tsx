interface IPageBody {
    children: React.ReactNode[] | React.ReactNode
}

const PageBody: React.FC<IPageBody> = ({ children }) => {
    return (
        <main className="px-20 mt-4 grid grid-cols-1 gap-y-4 justify-items-center">
            <div>
                {children}
            </div>
        </main>
    )
}

export default PageBody