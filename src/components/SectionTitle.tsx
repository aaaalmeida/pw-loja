interface ISectionTitle {
    title: string
}

const SectionTitle: React.FC<ISectionTitle> = ({ title }) => {
    return (
        <h2 className="text-lg">{title}</h2>
    )
}

export default SectionTitle