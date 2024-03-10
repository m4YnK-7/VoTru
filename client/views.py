from flask import Blueprint, render_template, request, send_file, redirect, url_for
import subprocess

views = Blueprint('views', __name__)

@views.route('/')
def home():
	return render_template('index.html')

@views.route('/poll')
def poll():
	return render_template('poll.html')

@views.route('/admin')
def ats():
	return render_template('admin.html')

@views.route('/reg')
def reg():
    return render_template("reg.html")

@views.route('build/contracts/Polls.json')
def serve_polls_json():
    
    json_path = '../build/contracts/Polls.json'
    return send_file(json_path, mimetype='application/json')