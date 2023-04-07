import './App.css';
import { About } from './components/About';
import { useTranslation } from 'react-i18next';
import { HelloWorld } from './components/HelloWorld';
import { Select } from 'antd';

function App() {
    const { i18n } = useTranslation();

    return (
        <div className="App">
            <HelloWorld />
            <About />
            <Select
                value={i18n.language}
                onChange={(language) => {
                    i18n.changeLanguage(language);
                }}
            >
                <Select.Option value="en-US">English</Select.Option>
                <Select.Option value="he-IL">Hebrew</Select.Option>
            </Select>
        </div>
    );
}

export default App;
