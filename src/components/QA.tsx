interface IQA {
    question: string
    answer: string
}

const QA: React.FC<IQA> = ({ answer, question }) => {
    return (
        <article className="py-1">
            <h3 className="text-lg">{question}</h3>
            <p className="text-sm">{answer}</p>
        </article>
    )
}

export default QA