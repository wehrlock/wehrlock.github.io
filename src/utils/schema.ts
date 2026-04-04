interface Person {
    givenName: string;
    familyName: string;
    path: string;
    profiles?: Record<string, string>;
}

export function generatePersonSchema(person: Person, siteUrl: string) {
    const fullName = `${person.givenName} ${person.familyName}`;
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: fullName,
        givenName: person.givenName,
        familyName: person.familyName,
        url: `${siteUrl}${person.path}`,
        ...(Object.keys(person.profiles || {}).length > 0 && { sameAs: Object.values(person.profiles) }),
    };
}
