import { NumberofchildrenPipe } from './numberofchildren.pipe';

describe('NumberofchildrenPipe', () => {
  let pipe: NumberofchildrenPipe;

  beforeEach(() => {
    pipe = new NumberofchildrenPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('no children and num_comments is 0 returns num_comments', () => {
    const item = {
      created_at_i: 42,
      title: '',
      url: 'https://example.com',
      author: 'foobar',
      points: 42,
      objectID: 13,
      num_comments: 0,
      text: 'foo',
      type: 'story',
      children: []
    };

    expect(pipe.transform(item)).toBe(0);
  });

  it('job type returns null', () => {
    const item = {
      created_at_i: 13,
      title: 'Jerry (YC S17) Is Hiring Software Developers (SF Bay Area)',
      url: 'https://apply.workable.com/jerry/j/630F7C6695/',
      author: 'linaz',
      points: 1,
      objectID: 22255992,
      num_comments: null,
      text: null,
      type: 'job',
      children: null
    };

    expect(pipe.transform(item)).toBeNull();
  });

  it('no children and num_comments is 42 returns num_comments', () => {
    const item = {
      created_at_i: 42,
      title: '',
      url: 'https://example.com',
      author: 'foobar',
      points: 42,
      objectID: 13,
      num_comments: 42,
      text: 'bar',
      type: 'story',
      children: []
    };

    expect(pipe.transform(item)).toBe(42);
  });

  it('one child and num_comments is 0 returns 1', () => {
    const item = {
      created_at_i: 42,
      title: '',
      url: 'https://example.com',
      author: 'foobar',
      points: 42,
      objectID: 13,
      num_comments: 0,
      text: 'baz',
      type: 'story',
      children: [{
        created_at_i: 43,
        title: '',
        url: 'https://example.com',
        author: 'foobar',
        points: 12,
        objectID: 74,
        num_comments: 0,
        text: 'foo',
        type: 'comment',
        children: []
      }]
    };

    expect(pipe.transform(item)).toBe(1);
  });

  it('three children, one non-comment, and num_comments is 0 returns 2', () => {
    const item = {
      created_at_i: 42,
      title: '',
      url: 'https://example.com',
      author: 'foobar',
      points: 42,
      objectID: 13,
      num_comments: 0,
      text: 'foo',
      type: 'story',
      children: [{
        created_at_i: 43,
        title: '',
        url: '',
        author: '',
        points: 0,
        objectID: 0,
        num_comments: 0,
        text: '',
        type: 'comment',
        children: []
      }, {
        created_at_i: 43,
        title: '',
        url: 'https://example.com',
        author: 'foobar',
        points: 12,
        objectID: 14,
        num_comments: 0,
        text: 'bar',
        type: 'comment',
        children: []
      }]
    };

    expect(pipe.transform(item)).toBe(2);
  });

  it('four children recursive and num_comments is 0 returns 4', () => {
    const item = {
      created_at_i: 42,
      title: '',
      url: 'https://example.com',
      author: 'foobar',
      points: 42,
      objectID: 13,
      num_comments: 0,
      text: 'baz',
      type: 'story',
      children: [{
        created_at_i: 43,
        title: '',
        url: 'https://example.com',
        author: 'foobar',
        points: 12,
        objectID: 74,
        num_comments: 0,
        text: 'foo',
        type: 'comment',
        children: []
      }, {
        created_at_i: 44,
        title: '',
        url: 'https://example.com',
        author: 'foobar',
        points: 12,
        objectID: 14,
        num_comments: 0,
        text: 'bar',
        type: 'comment',
        children: [{
          created_at_i: 45,
          title: '',
          url: 'https://example.com',
          author: 'foobar',
          points: 12,
          objectID: 73,
          num_comments: 0,
          text: 'baz',
          type: 'comment',
          children: []
        }]
      }, {
        created_at_i: 46,
        title: '',
        url: 'https://example.com',
        author: 'foobar',
        points: 12,
        objectID: 54,
        num_comments: 0,
        text: 'foo',
        type: 'comment',
        children: []
      }]
    };

    expect(pipe.transform(item)).toBe(4);
  });

  it('complex example taken from real item should return 17', () => {
    const item = {
      "id": 22241533,
      "created_at": "2020-02-04T22:04:49.000Z",
      "created_at_i": 1580853889,
      type: 'story',
      "author": "rbanffy",
      "title": "Learn X in Y minutes Where X=Prolog",
      "url": "https://learnxinyminutes.com/docs/prolog/",
      "text": null,
      "points": 48,
      "parent_id": null,
      "story_id": null,
      objectID: 54,
      num_comments: 0,
      "children": [
        {
          "id": 22242352,
          "created_at": "2020-02-04T23:37:32.000Z",
          "created_at_i": 1580859452,
          type: 'comment',
          "author": "piadodjanho",
          "title": null,
          "url": null,
          "text": "<p>What are the differences from Prolog for a constraint programing language such MiniZinc?</p>",
          "points": null,
          "parent_id": 22241533,
          "story_id": 22241533,
          objectID: 54,
          num_comments: 0,
          "children": [
            {
              "id": 22242608,
              "created_at": "2020-02-05T00:09:56.000Z",
              "created_at_i": 1580861396,
              type: 'comment',
              "author": "7thaccount",
              "title": null,
              "url": null,
              "text": "<p>MiniZinc is a generic language and IDE for optimization problems. You can hook into a variety of solvers (LP, MILP, Nonlinear, and some kind of like Prolog). The solvers have to be able to read the the flatzinc file type that MiniZinc exports if they don&#x27;t support native hooks.</p>",
              "points": null,
              "parent_id": 22242352,
              "story_id": 22241533,
              objectID: 54,
              num_comments: 0,
              "children": [],
              "options": []
            }
          ],
          "options": []
        },
        {
          "id": 22242871,
          "created_at": "2020-02-05T00:42:18.000Z",
          "created_at_i": 1580863338,
          type: 'comment',
          "author": "e12e",
          "title": null,
          "url": null,
          "text": "<p>Does anyone know if there&#x27;s a datalog-like embeddable language that is suitable for simple integer constraints (the sum of a, b, c, and d must be e; e=10.,b&gt;2.)?</p><p>For prolog, there&#x27;s apparently\n<a href=\"https:&#x2F;&#x2F;github.com&#x2F;triska&#x2F;clpz&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;triska&#x2F;clpz&#x2F;</a></p><p>But I really just want some simple constraints-oriented form validation (you have 100 points, please feel free to by x&#x27;s for 1 point each, y&#x27;s for a cost of 5 points. You don&#x27;t have to spend all points - with feedback of how many points are left as more x and y are bought. But for more variables, where there are clear rules that can be modeled naturally as constraints rather than with state and callbacks on change).</p><p>Ed: specifically for forms, there&#x27;s <a href=\"https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;docs&#x2F;Web&#x2F;Guide&#x2F;HTML&#x2F;HTML5&#x2F;Constraint_validation\" rel=\"nofollow\">https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;docs&#x2F;Web&#x2F;Guide&#x2F;HTML&#x2F;HTML...</a> - but it feels like it gets messy with interdependent fields.</p>",
          "points": null,
          "parent_id": 22241533,
          "story_id": 22241533,
          objectID: 54,
          num_comments: 0,
          "children": [
            {
              "id": 22243113,
              "created_at": "2020-02-05T01:22:28.000Z",
              "created_at_i": 1580865748,
              type: 'comment',
              "author": "schoen",
              "title": null,
              "url": null,
              "text": "<p>You might like a Satisfiability Modulo Theories (SMT) solver such as Z3.</p><p><a href=\"https:&#x2F;&#x2F;github.com&#x2F;Z3Prover&#x2F;z3\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;Z3Prover&#x2F;z3</a></p><p>It has bindings for other languages and is able to make some rather sophisticated arithmetical and logical deductions in an often pretty efficient way. I&#x27;ve used it successfully for parts of puzzle competitions and CTFs (and I&#x27;m really only beginning to scratch the surface of what it can do).</p><p>You can read more about the options in that area at</p><p><a href=\"https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Satisfiability_modulo_theories\" rel=\"nofollow\">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Satisfiability_modulo_theories</a></p><p>which also links to the related tools in</p><p><a href=\"https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Answer_set_programming\" rel=\"nofollow\">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Answer_set_programming</a></p><p><a href=\"https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Constraint_programming\" rel=\"nofollow\">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Constraint_programming</a></p><p>These systems can feel pretty magical and are getting more powerful all the time. (Of course there are cases where there is a better algorithm that you could find, perhaps a much more efficient one, and using these solvers will be asymptotically or worst-case slower than it had to be given more human insight.)</p>",
              "points": null,
              "parent_id": 22242871,
              "story_id": 22241533,
              objectID: 54,
              num_comments: 0,
              "children": [],
              "options": []
            }
          ],
          "options": []
        },
        {
          "id": 22242144,
          "created_at": "2020-02-04T23:09:57.000Z",
          "created_at_i": 1580857797,
          type: 'comment',
          "author": "7thaccount",
          "title": null,
          "url": null,
          "text": "<p>I think the Adventures in Prolog book is the best way to learn where you code up a text adventure game. It made things click much better than any tutorial for me.</p><p>In general though I really like &quot;learn x in y&quot; as a resource.</p><p>I like the concept of Prolog too, but to me it makes very hard things easier and easy things hard. So it doesn&#x27;t make sense in many situations to use.</p>",
          "points": null,
          "parent_id": 22241533,
          "story_id": 22241533,
          objectID: 54,
          num_comments: 0,
          "children": [],
          "options": []
        },
        {
          "id": 22242400,
          "created_at": "2020-02-04T23:43:31.000Z",
          "created_at_i": 1580859811,
          type: 'comment',
          "author": "punnerud",
          "title": null,
          "url": null,
          "text": "<p>I have been thinking of Prolog as SQL, but the “goals” are your data generator&#x2F;table and the constraints are everything in there WHERE-clause.\nMade it simpler to reason about.</p><p>Learning Erlang was also easier when I figured out that it is (was?) build on Prolog, with its analogy to SQL.</p>",
          "points": null,
          "parent_id": 22241533,
          "story_id": 22241533,
          objectID: 54,
          num_comments: 0,
          "children": [
            {
              "id": 22242422,
              "created_at": "2020-02-04T23:46:25.000Z",
              "created_at_i": 1580859985,
              type: 'comment',
              "author": "FreeFull",
              "title": null,
              "url": null,
              "text": "<p>There is a subset of Prolog called Datalog, explicitly designed for use in databases. Datalog queries are guaranteed to terminate, and unlike Prolog it is fully declarative (order of declarations doesn&#x27;t matter).</p>",
              "points": null,
              "parent_id": 22242400,
              "story_id": 22241533,
              objectID: 54,
              num_comments: 0,
              "children": [],
              "options": []
            }
          ],
          "options": []
        },
        {
          "id": 22242240,
          "created_at": "2020-02-04T23:19:20.000Z",
          "created_at_i": 1580858360,
          type: 'comment',
          "author": "balthasar",
          "title": null,
          "url": null,
          "text": "<p>What is y?</p>",
          "points": null,
          "parent_id": 22241533,
          "story_id": 22241533,
          objectID: 54,
          num_comments: 0,
          "children": [
            {
              "id": 22242251,
              "created_at": "2020-02-04T23:20:41.000Z",
              "created_at_i": 1580858441,
              type: 'comment',
              "author": "ben-schaaf",
              "title": null,
              "url": null,
              "text": "<p>I think you have to learn prolog to find out.</p>",
              "points": null,
              "parent_id": 22242240,
              "story_id": 22241533,
              objectID: 54,
              num_comments: 0,
              "children": [],
              "options": []
            },
            {
              "id": 22242258,
              "created_at": "2020-02-04T23:21:55.000Z",
              "created_at_i": 1580858515,
              type: 'comment',
              "author": "sansnomme",
              "title": null,
              "url": null,
              "text": "<p>No.</p>",
              "points": null,
              "parent_id": 22242240,
              "story_id": 22241533,
              objectID: 54,
              num_comments: 0,
              "children": [
                {
                  "id": 22242854,
                  "created_at": "2020-02-05T00:39:23.000Z",
                  "created_at_i": 1580863163,
                  type: 'comment',
                  "author": "DonHopkins",
                  "title": null,
                  "url": null,
                  "text": "<p>How many Prolog programmers does it take to change a lightbulb?</p><p>false.</p><p><a href=\"https:&#x2F;&#x2F;www.j-paine.org&#x2F;dobbs&#x2F;prolog_lightbulb.html\" rel=\"nofollow\">https:&#x2F;&#x2F;www.j-paine.org&#x2F;dobbs&#x2F;prolog_lightbulb.html</a></p>",
                  "points": null,
                  "parent_id": 22242258,
                  "story_id": 22241533,
                  objectID: 54,
                  num_comments: 0,
                  "children": [],
                  "options": []
                },
                {
                  "id": 22242396,
                  "created_at": "2020-02-04T23:43:14.000Z",
                  "created_at_i": 1580859794,
                  type: 'comment',
                  "author": "msla",
                  "title": null,
                  "url": null,
                  "text": "<p>Stop joking or someone&#x27;s going to cut you.</p><p>(That pun wasn&#x27;t very satisfying, was it?)</p>",
                  "points": null,
                  "parent_id": 22242258,
                  "story_id": 22241533,
                  objectID: 54,
                  num_comments: 0,
                  "children": [],
                  "options": []
                }
              ],
              "options": []
            },
            {
              "id": 22243027,
              "created_at": "2020-02-05T01:06:14.000Z",
              "created_at_i": 1580864774,
              type: 'comment',
              "author": "ngcc_hk",
              "title": null,
              "url": null,
              "text": "<p>It is a serious good articles to summarise certain language</p>",
              "points": null,
              "parent_id": 22242240,
              "story_id": 22241533,
              objectID: 54,
              num_comments: 0,
              "children": [],
              "options": []
            }
          ],
          "options": []
        },
        {
          "id": 22242252,
          "created_at": "2020-02-04T23:20:44.000Z",
          "created_at_i": 1580858444,
          type: 'comment',
          "author": "sansnomme",
          "title": null,
          "url": null,
          "text": "<p>Most of the Prolog books are thick academic textbooks, for a more modern take with YouTube videos, take a look at <a href=\"https:&#x2F;&#x2F;www.metalevel.at&#x2F;prolog\" rel=\"nofollow\">https:&#x2F;&#x2F;www.metalevel.at&#x2F;prolog</a></p>",
          "points": null,
          "parent_id": 22241533,
          "story_id": 22241533,
          objectID: 54,
          num_comments: 0,
          "children": [
            {
              "id": 22242549,
              "created_at": "2020-02-05T00:02:51.000Z",
              "created_at_i": 1580860971,
              type: 'comment',
              "author": "7thaccount",
              "title": null,
              "url": null,
              "text": "<p>Or Adventures in Prolog.</p>",
              "points": null,
              "parent_id": 22242252,
              "story_id": 22241533,
              objectID: 54,
              num_comments: 0,
              "children": [],
              "options": []
            }
          ],
          "options": []
        },
        {
          "id": 22242785,
          "created_at": "2020-02-05T00:31:41.000Z",
          "created_at_i": 1580862701,
          type: 'comment',
          "author": "fizixer",
          "title": null,
          "url": null,
          "text": "<p>I&#x27;m told Prolog is the old way.</p><p>miniKanren (by William Byrd et. al.) is trending for many years though I&#x27;d like to know what&#x27;s fundamentally new about it.</p><p>The fact that Byrd later worked on constraint&#x27;ed miniKanren (cKanren) means miniKanren is not as powerful?</p><p>His recent talk about using it with Barliman frontend was pretty cool [1]</p><p>[1] <a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=RVDCRlW1f1Y\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=RVDCRlW1f1Y</a></p>",
          "points": null,
          "parent_id": 22241533,
          "story_id": 22241533,
          objectID: 54,
          num_comments: 0,
          "children": [
            {
              "id": 22242983,
              "created_at": "2020-02-05T00:58:19.000Z",
              "created_at_i": 1580864299,
              type: 'comment',
              "author": "7thaccount",
              "title": null,
              "url": null,
              "text": "<p>I always thought minikanren was just a toy Prolog implemented in Lisp and then other languages.</p>",
              "points": null,
              "parent_id": 22242785,
              "story_id": 22241533,
              objectID: 54,
              num_comments: 0,
              "children": [],
              "options": []
            }
          ],
          "options": []
        }
      ],
      "options": []
    };

    expect(pipe.transform(item)).toBe(17);
  })
});
