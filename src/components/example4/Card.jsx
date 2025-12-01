const CardChildren = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

const Card = () => {
    return (
        <div>
            <CardChildren>
                <h2>Card Title 1</h2>
                <p>This is some content for card 1.</p>
            </CardChildren>
            <CardChildren>
                <h2>Card Title 2</h2>
                <p>This is some content for card 2.</p>
            </CardChildren>
            <CardChildren>
                <h2>Card Title 2</h2>
                <p>This is some content for card 2.</p>
            </CardChildren>
        </div>
    );
}

export default Card;