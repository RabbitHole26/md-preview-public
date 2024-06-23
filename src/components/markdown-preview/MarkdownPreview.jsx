import { light } from '../../store/theme-context/theme-aliases-map'
import MarkdownPreview from '@uiw/react-markdown-preview'
import usePreviewContext from '../../store/preview-context/usePreviewContext'
import useThemeContext from '../../store/theme-context/useThemeContext'
import ButtonClose from '../buttons/ButtonClose'

const PreviewSnippet = () => {
  const {snippetPreview, setSnippetPreview} = usePreviewContext()
  const {theme} = useThemeContext()

  const handleClick = () => {
    setSnippetPreview(prev => ({
      ...prev,
      id: null
    }))
  }

  return (
    <div className={`flex flex-col p-1 rounded-md mb-2 mx-1 330px-custom:mx-2 ${theme === light ? 'bg-neutral-300' : 'bg-stone-800'}`}>
      <div className='flex justify-end'>
        <ButtonClose onClick={handleClick}/>
      </div>
      <div>
        <MarkdownPreview
          source={snippetPreview.body}
          wrapperElement={theme === light
            ? {"data-color-mode": "light"}
            : {"data-color-mode": "dark"}
          }
          style={{
            borderRadius: '6px',
            padding: '25px',
            maxHeight: '300px',
            overflow: 'auto',
            scrollbarWidth: 'none'
          }}
        />
      </div>
    </div>
  )
}

export default PreviewSnippet