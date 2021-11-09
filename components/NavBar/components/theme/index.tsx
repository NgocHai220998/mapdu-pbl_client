import { useDispatch, useSelector } from "react-redux";
import { hiddenLoading, showLoadding } from "../../../../slices/loading";
import { changeTheme } from "../../../../slices/theme";
import { delayTime } from "../../../../utils/helpers";
import { KEY_TYPES, setItem } from "../../../../utils/localStoreTools";
import { ITheme, THEMES } from "./config";

interface IThemeProps {
  handleClose: () => void
}

const Theme = (props: IThemeProps) => {
  const theme = useSelector((state: any) => state.theme)
  const dispatch = useDispatch();
  const { handleClose } = props;
  
  const handleChangeTheme = async (name: string) => {
    dispatch(showLoadding())
    handleClose()
    setItem(KEY_TYPES.THEME, { theme: name })
    await delayTime(2000)

    dispatch(hiddenLoading())
    dispatch(changeTheme(name));
  }

  return (
    <>
      <section className="theme-container">
        {
          THEMES.map((item: ITheme, index: number) => (
            <div key={'theme' + index} className="theme-container__item">
              <img
                onClick={() => handleChangeTheme(item.name)}
                className={`border-hover el-hover ${theme === item.name ? 'border-selected' : ''}`}
                src={item.image} alt={item.name}
              />
            </div>
          ))
        }
      </section>
      <style jsx>{`
        .theme-container {
          margin: 12px 12px;
          width: 330px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          &__item {
            width: 150px;
            height: 75px;
            margin-bottom: 2px;
            margin-top: 2px;

            img {
              width: 100%;
              height: 100%;
              border-radius: 5px;
            }
          }
        }
      `}
      </style>
    </>
  )
}

export default Theme
