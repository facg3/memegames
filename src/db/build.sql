BEGIN;

DROP TABLE IF EXISTS games CASCADE;

CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  url VARCHAR(100) NOT NULL
);

INSERT INTO games (name, url) VALUES
('trollface', 'https://f3.silvergames.com/trollface-quest-silvergames.swfg'),
('trollface 2', 'https://f3.silvergames.com/trollface-quest-2-silvergames.swf');



COMMIT;
