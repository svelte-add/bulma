<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="bulma-logo" width="112" height="28" />
        </a>

        <a href="/home" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a href="/home" class="navbar-item"> Home </a>

            <a href="/docs" class="navbar-item"> Documentation </a>

            <div class="navbar-item has-dropdown is-hoverable">
                <a href="/more" class="navbar-link"> More </a>

                <div class="navbar-dropdown">
                    <a href="/about" class="navbar-item"> About </a>
                    <a href="/jobs" class="navbar-item"> Jobs </a>
                    <a href="/contact" class="navbar-item"> Contact </a>
                    <hr class="navbar-divider" />
                    <a href="/report-issue" class="navbar-item"> Report an issue </a>
                </div>
            </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <button class="button is-primary">
                        <strong>Sign up</strong>
                    </button>
                    <button class="button is-light"> Log in </button>
                </div>
            </div>
        </div>
    </div>
</nav>

<h1 class="is-size-1">Buttons</h1>

<button class="button mb-3">Button</button>

<div class="buttons">
    <button class="button is-primary">Primary</button>
    <button class="button is-link">Link</button>
</div>

<h1 class="is-size-1">Inputs</h1>

<input class="input mb-3" type="text" placeholder="Text input" />

<input class="input is-info mb-3" type="text" placeholder="Info input" />

<div class="select">
    <select>
        <option>Select dropdown</option>
        <option>With options</option>
    </select>
</div>

<h1 class="is-size-1">Table</h1>

<table class="table is-hoverable">
    <thead>
        <tr>
            <th><abbr title="Position">Pos</abbr></th>
            <th>Team</th>
            <th><abbr title="Played">Pld</abbr></th>
            <th><abbr title="Won">W</abbr></th>
            <th><abbr title="Drawn">D</abbr></th>
            <th><abbr title="Lost">L</abbr></th>
            <th><abbr title="Goals for">GF</abbr></th>
            <th><abbr title="Goals against">GA</abbr></th>
            <th><abbr title="Goal difference">GD</abbr></th>
            <th><abbr title="Points">Pts</abbr></th>
            <th>Qualification or relegation</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <th><abbr title="Position">Pos</abbr></th>
            <th>Team</th>
            <th><abbr title="Played">Pld</abbr></th>
            <th><abbr title="Won">W</abbr></th>
            <th><abbr title="Drawn">D</abbr></th>
            <th><abbr title="Lost">L</abbr></th>
            <th><abbr title="Goals for">GF</abbr></th>
            <th><abbr title="Goals against">GA</abbr></th>
            <th><abbr title="Goal difference">GD</abbr></th>
            <th><abbr title="Points">Pts</abbr></th>
            <th>Qualification or relegation</th>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <th>1</th>
            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong> </td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
            <td>3</td>
            <td>68</td>
            <td>36</td>
            <td>+32</td>
            <td>81</td>
            <td
                >Qualification for the <a
                    href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                    title="2016–17 UEFA Champions League">Champions League group stage</a
                ></td
            >
        </tr>
        <tr>
            <th>2</th>
            <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
            <td>38</td>
            <td>20</td>
            <td>11</td>
            <td>7</td>
            <td>65</td>
            <td>36</td>
            <td>+29</td>
            <td>71</td>
            <td
                >Qualification for the <a
                    href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                    title="2016–17 UEFA Champions League">Champions League group stage</a
                ></td
            >
        </tr>
        <tr>
            <th>3</th>
            <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
            <td>38</td>
            <td>19</td>
            <td>13</td>
            <td>6</td>
            <td>69</td>
            <td>35</td>
            <td>+34</td>
            <td>70</td>
            <td
                >Qualification for the <a
                    href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                    title="2016–17 UEFA Champions League">Champions League group stage</a
                ></td
            >
        </tr>
        <tr>
            <th>4</th>
            <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></td>
            <td>38</td>
            <td>19</td>
            <td>9</td>
            <td>10</td>
            <td>71</td>
            <td>41</td>
            <td>+30</td>
            <td>66</td>
            <td
                >Qualification for the <a
                    href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round"
                    title="2016–17 UEFA Champions League">Champions League play-off round</a
                ></td
            >
        </tr>
    </tbody>
</table>

<h1 class="is-size-1">Columns / Flexbox</h1>
<div class="columns has-text-centered">
    <div class="column has-background-primary m-2 box">First column</div>
    <div class="column has-background-primary m-2 box">Second column</div>
    <div class="column has-background-primary m-2 box">Third column</div>
    <div class="column has-background-primary m-2 box">Fourth column</div>
</div>

<h1 class="is-size-1">Pagination</h1>
<nav class="pagination" role="navigation" aria-label="pagination">
    <button class="button pagination-previous">Previous</button>
    <button class="button pagination-next">Next page</button>
    <ul class="pagination-list">
        <li>
            <button class="button pagination-link" aria-label="Goto page 1">1</button>
        </li>
        <li>
            <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
            <button class="button pagination-link" aria-label="Goto page 45">45</button>
        </li>
        <li>
            <button class="button pagination-link is-current" aria-label="Page 46" aria-current="page">46</button>
        </li>
        <li>
            <button class="button pagination-link" aria-label="Goto page 47">47</button>
        </li>
        <li>
            <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
            <button class="button pagination-link" aria-label="Goto page 86">86</button>
        </li>
    </ul>
</nav>
