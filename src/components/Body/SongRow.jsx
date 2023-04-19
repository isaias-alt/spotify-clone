import { SongRowContainer, SongRowInfo } from './SongRow.js'

const SongRow = ({ track }) => {
  return (
    <SongRowContainer>
      {
        <>
        <img src={track.album.images[0].url} alt='album'/>
        <SongRowInfo>
          <h4>{ track.name }</h4>
          <p>
            {
              track.artists.map(artist => artist.name).join(', ')
            }
            {
              track.album.name
            }
          </p>
        </SongRowInfo>
        </>
      }
    </SongRowContainer>
  )
}

export default SongRow
