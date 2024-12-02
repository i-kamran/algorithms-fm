const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    walk(maze, wall, start, end, seen, path);
    return path;
}

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
) {
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    )
        return false;
    if (maze[curr.y][curr.x] === wall) return false;
    if (seen[curr.y][curr.x]) return false;
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    seen[curr.y][curr.x] = true;
    path.push(curr);
    for (let i = 0; i < dirs.length; ++i) {
        const dir: Point = { x: curr.x + dirs[i][1], y: curr.y + dirs[i][0] };
        if (walk(maze, wall, dir, end, seen, path)) return true;
    }
    path.pop();

    return false;
}
