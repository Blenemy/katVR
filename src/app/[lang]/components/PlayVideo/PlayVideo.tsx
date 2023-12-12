import Image from 'next/image'
import playVideo from '../../../../../public/icons/play-video-active.svg'
import cn from 'classnames'

interface PlayVideoProps {
  classname: string
  playVideoFunc: any
}

type PartialVideoProps = Partial<PlayVideoProps>

export const PlayVideo: React.FC<PartialVideoProps> = ({ classname }) => {
  return (
    <Image
      src={playVideo}
      alt="playVideo"
      className={cn('play-video', {
        [`${classname}`]: !!classname
      })}
    />
  )
}
