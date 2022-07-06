import { Link, useParams } from 'react-router-dom';
import { GameDescription, GameGamesGrid, GameGamesCard, GameHero, GameRoot } from './Game.styles';
import { ImageGallery } from '@/components/ImageGallery/ImageGallery';
import { useGame } from '@/queries/game';

export function Game() {
  const { id: gameId } = useParams();
  const [gameResult, screensResult, dlcsResults, parentsResult, seriesResult] = useGame(gameId!);

  if (gameResult.isIdle || gameResult.isLoading) {
    return <div>Loading...</div>;
  }

  if (gameResult.isError) {
    return <span>Error: {(gameResult.error as Error).message}</span>;
  }

  const game = gameResult.data;

  return (
    <GameRoot>
      <GameHero background={game.background_image_additional ?? game.background_image}>
        <h1>{game.name}</h1>
      </GameHero>
      <div>
        {game.name_original && (
          <div>
            <strong>Original name</strong>: {game.name_original}
          </div>
        )}
        {game.platforms && (
          <div>
            <strong>Platforms</strong>:{' '}
            {game.platforms
              .map((p) => p.platform?.name)
              .filter(Boolean)
              .join(', ')}
          </div>
        )}
        {game.alternative_names && game.alternative_names.length > 0 && (
          <div>
            <strong>Alternative names</strong>: {game.alternative_names.join(', ')}
          </div>
        )}
        {game.description && (
          <>
            <div>
              <strong>Description:</strong>
            </div>
            <GameDescription dangerouslySetInnerHTML={{ __html: game.description }} />
          </>
        )}
      </div>
      {screensResult.isSuccess && (
        <div>
          <h2>Screenshots</h2>
          <ImageGallery images={screensResult.data.results} />
        </div>
      )}
      {seriesResult.isSuccess && seriesResult.data.results.length > 0 && (
        <div>
          <h2>Of the same serie</h2>
          <GameGamesGrid>
            {seriesResult.data.results.map((game) => (
              <GameGamesCard key={game.slug} background={game.background_image}>
                <Link to={`/games/${game.slug}`}>{game.name}</Link>
              </GameGamesCard>
            ))}
          </GameGamesGrid>
        </div>
      )}
      {dlcsResults.isSuccess && dlcsResults.data.results.length > 0 && (
        <div>
          <h2>DLCs</h2>
          <GameGamesGrid>
            {dlcsResults.data.results.map((dlc) => (
              <GameGamesCard key={dlc.slug} background={dlc.background_image}>
                <Link to={`/games/${dlc.slug}`}>{dlc.name}</Link>
              </GameGamesCard>
            ))}
          </GameGamesGrid>
        </div>
      )}
      {parentsResult.isSuccess && parentsResult.data.results.length > 0 && (
        <div>
          <h2>Related</h2>
          <GameGamesGrid>
            {parentsResult.data.results.map((parent) => (
              <GameGamesCard key={parent.slug} background={parent.background_image}>
                <Link to={`/games/${parent.slug}`}>{parent.name}</Link>
              </GameGamesCard>
            ))}
          </GameGamesGrid>
        </div>
      )}
    </GameRoot>
  );
}
