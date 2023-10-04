import Team from '../app';
import Character from '../characters';

test('add new member', () => {
  const newMember = new Character('Owen');
  const newTeam = new Team();
  newTeam.add(newMember);

  expect(newTeam.members).toEqual(new Set([{ name: 'Owen' }]));
});

test('add existing member', () => {
  const newMember = new Character('Owen');
  const newTeam = new Team();
  newTeam.add(newMember);

  expect(() => newTeam.add(newMember)).toThrow(`${newMember.name} уже в команде`);
});

test('add bunch of members', () => {
  const newMember = new Character('Owen');
  const secondMember = new Character('Jak');
  const thirdMember = new Character('Bob');
  const newTeam = new Team();
  newTeam.addAll(newMember, secondMember, thirdMember);

  expect(newTeam.members).toEqual(new Set([
    { name: 'Owen' },
    { name: 'Jak' },
    { name: 'Bob' },
  ]));
});

test('array from set', () => {
  const newMember = new Character('Owen');
  const secondMember = new Character('Jak');
  const thirdMember = new Character('Bob');
  const newTeam = new Team();
  newTeam.addAll(newMember, secondMember, thirdMember);

  expect(newTeam.toArray()).toEqual([
    { name: 'Owen' },
    { name: 'Jak' },
    { name: 'Bob' },
  ]);
});