import { useEffect, useState } from 'react';
import { fetch, QueryResult } from '@/utils/fetch';
import { Link, useParams } from 'react-router-dom';
import { GameDescription, GameGamesGrid, GameGamesCard, GameHero, GameRoot } from './Game.styles';
import { ImageGallery } from '@/components/ImageGallery/ImageGallery';

export function Game() {
  const { id: gameId } = useParams();
  const [game, setGame] = useState<QueryResult<'/games/{id}'>>();
  const [screenshots, setScreenshots] =
    useState<QueryResult<'/games/{game_pk}/screenshots'>['results']>();
  const [gameSeries, setGameSeries] =
    useState<QueryResult<'/games/{game_pk}/game-series'>['results']>();
  const [dlcs, setDlcs] = useState<QueryResult<'/games/{game_pk}/additions'>['results']>();
  const [parents, setParents] = useState<QueryResult<'/games/{game_pk}/parent-games'>['results']>();

  useEffect(() => {
    if (!gameId) {
      return;
    }

    fetch('/games/{id}', {
      params: {
        id: gameId,
      },
    }).then((gameResult) => {
      setGame(gameResult);
    });

    fetch('/games/{game_pk}/screenshots', {
      params: {
        game_pk: gameId,
      },
    }).then((screenshotResult) => {
      setScreenshots(screenshotResult.results);
    });

    fetch('/games/{game_pk}/game-series', {
      params: {
        game_pk: gameId,
      },
    }).then((gameSeriesResult) => {
      setGameSeries(gameSeriesResult.results);
    });

    fetch('/games/{game_pk}/additions', {
      params: {
        game_pk: gameId,
      },
    }).then((dlcsResult) => {
      setDlcs(dlcsResult.results);
    });

    fetch('/games/{game_pk}/parent-games', {
      params: {
        game_pk: gameId,
      },
    }).then((parentResult) => {
      setParents(parentResult.results);
    });
  }, [gameId]);

  if (!game) {
    return <div>Loading...</div>;
  }

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
      {screenshots && (
        <div>
          <h2>Screenshots</h2>
          <ImageGallery images={screenshots} />
        </div>
      )}
      {gameSeries && gameSeries.length > 0 && (
        <div>
          <h2>Of the same serie</h2>
          <GameGamesGrid>
            {gameSeries.map((game) => (
              <GameGamesCard key={game.slug} background={game.background_image}>
                <Link to={`/games/${game.slug}`}>{game.name}</Link>
              </GameGamesCard>
            ))}
          </GameGamesGrid>
        </div>
      )}
      {dlcs && dlcs.length > 0 && (
        <div>
          <h2>DLCs</h2>
          <GameGamesGrid>
            {dlcs.map((dlc) => (
              <GameGamesCard key={dlc.slug} background={dlc.background_image}>
                <Link to={`/games/${dlc.slug}`}>{dlc.name}</Link>
              </GameGamesCard>
            ))}
          </GameGamesGrid>
        </div>
      )}
      {parents && parents.length > 0 && (
        <div>
          <h2>Related</h2>
          <GameGamesGrid>
            {parents.map((parent) => (
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
