const $button = document.querySelector('#button');
const $inputTextArea = document.querySelector('#inputTextArea');
const $outputTextArea = document.querySelector('#outputTextArea');

const inputRegex = /^[\x00-\xff]+$/;

$button.addEventListener('click', async () =>
{
    const text = $inputTextArea.value;
    if (!inputRegex.test(text))
    {
        showToast('输入为空或包含不合法字符');
        $inputTextArea.focus();
        $inputTextArea.select();
    }
    else
    {
        $button.setAttribute('disabled', 'true');
        $inputTextArea.setAttribute('disabled', 'true');
        try
        {
            const {
                code,
                result,
            } = await postSentence(text);

            if (code === 0)
            {
                $outputTextArea.value = result;
            }
            else
            {
                showToast(`后端错误：${result}`);
            }
        }
        catch (e)
        {
            showToast(`网络错误：${e.message}`);
        }
        $button.removeAttribute('disabled');
        $inputTextArea.removeAttribute('disabled');
    }
});