"""Prepare dataset as numpy"""

import json
import numpy as np

DTYPE = 'float'

color_to_onehot = {
    'black': np.array([1,0], dtype=DTYPE),
    'white': np.array([0,1], dtype=DTYPE),
}

def get_sample():
    with open('dataset/output', 'r') as f:
        for line in f:
            o = json.loads(line)
            y = color_to_onehot[o[0]]
            x = np.array(o[1], dtype=DTYPE)
            yield x, y