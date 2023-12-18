'use client'

import Image from 'next/image'
import cn from 'classnames'
import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import YouTube from 'react-youtube'

import playVideo from '../../../../../public/icons/play-video-active.svg'

import './PlayVideo.scss'
interface PlayVideoProps {
  classname: string
}

export const PlayVideo: React.FC<PlayVideoProps> = ({ classname }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)

  const handleToggleModal = () => {
    setModalOpen((prev) => !prev)
  }

  const opts = {
    height: '486px',
    width: '100%',
    playerVars: {
      autoplay: 0
    }
  }

  return (
    <>
      <Image
        src={playVideo}
        alt="playVideo"
        className={cn('play-video', {
          [`${classname}`]: !!classname
        })}
        onClick={handleToggleModal}
      />
      {isModalOpen && (
        <Modal isActive={isModalOpen} handleToggleModal={handleToggleModal}>
          <div className="video-wrapper">
            <YouTube videoId={'sgEJ4sOwboM'} opts={opts} />
          </div>
        </Modal>
      )}
    </>
  )
}
