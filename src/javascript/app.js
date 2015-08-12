// React.render(<HelloWorld name="Shaopeng Zhang" />, document.getElementById('react-target'));
React.render(<Form />, document.getElementById('react-target'));

if (typeof window !== 'undefined') {
    window.React = React;
}