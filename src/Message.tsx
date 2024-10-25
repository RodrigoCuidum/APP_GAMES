function Message() {
    const name = 'Yurii';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello guys</h1>;
}

export default Message; 