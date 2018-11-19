/* Old way of defining a sprite */
const oldSprite = {
    hamburger: <svg><g /></svg>,
    plus: <svg><g /></svg>,
    min: <svg><g /></svg>,
    person: <svg><g /></svg>
};

type OldIconNames = 'hamburger' | 'plus' | 'min' | 'person';

interface OldIconSpriteProps {
    name: OldIconNames;
}

const OldIconSprite = ({ name }: OldIconSpriteProps) => {
    return (oldSprite[name]) ?
        <span className="a-icon">{oldSprite[name]}</span>
        : null;
};

/* Implementation */
<OldIconSprite name="person" />







/* New way of defining a sprite */
const newSprite = {
    hamburger: <svg><g /></svg>,
    plus: <svg><g /></svg>,
    min: <svg><g /></svg>,
    person: <svg><g /></svg>
};

type NewIconNames = keyof typeof newSprite;

interface NewIconSpriteProps {
    name: NewIconNames;
}

const NewIconSprite = ({ name }: NewIconSpriteProps) => {
    return (newSprite[name]) ?
        <span className="a-icon">{newSprite[name]}</span>
        : null;
};

/* Implementation */
<OldIconSprite name="person" />